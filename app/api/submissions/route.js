import { NextResponse } from "next/server";
import connectDB from "@/lib/db-connect";
import Submission from "@/models/Submission";
import Event from "@/models/Event";
import Team from "@/models/Team";
import { auth } from "@/auth";

export async function POST(req) {
    try {
        await connectDB();
        const session = await auth();

        if (!session || !session.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Parse the request body
        const body = await req.json();
        const { event, team, title, description, repoLink, demoLink } = body;
        const userId = session.user.id;

        // Validate required fields
        if (!event || !team || !title || !description || !repoLink) {
            return NextResponse.json(
                { error: "Missing required fields: event, team, title, description, repoLink" },
                { status: 400 }
            );
        }

        // Check if event exists
        const eventExists = await Event.findById(event);
        if (!eventExists) {
            return NextResponse.json({ error: "Invalid event ID" }, { status: 404 });
        }

        // Check if team exists
        const teamExists = await Team.findById(team);
        if (!teamExists) {
            return NextResponse.json({ error: "Invalid team ID" }, { status: 404 });
        }

        // Check if user is a member of the team
        if (teamExists.leader.toString() !== userId && !teamExists.members.some(m => m.toString() === userId)) {
            return NextResponse.json(
                { error: "You are not a member of this team" },
                { status: 403 }
            );
        }

        // Check for duplicate submission (One per team per event)
        const existingSubmission = await Submission.findOne({ event, team });
        if (existingSubmission) {
            return NextResponse.json(
                { error: "Submission already exists for this team in this event." },
                { status: 409 } // Conflict
            );
        }

        // Create the submission
        const newSubmission = await Submission.create({
            event,
            team,
            title,
            description,
            repoLink,
            demoLink,
        });

        return NextResponse.json(
            { success: true, submission: newSubmission },
            { status: 201 }
        );

    } catch (error) {
        console.error("Submission Create Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}


export async function GET(req) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const eventId = searchParams.get("eventId");
        const teamId = searchParams.get("teamId");

        let query = {};
        if (eventId) query.event = eventId;
        if (teamId) query.team = teamId;

        // Populate team details (name) and event details (title)
        const submissions = await Submission.find(query)
            .populate("team", "name")
            .populate("event", "title")
            .sort({ createdAt: -1 });

        return NextResponse.json({ success: true, submissions });

    } catch (error) {
        console.error("Submission Fetch Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
