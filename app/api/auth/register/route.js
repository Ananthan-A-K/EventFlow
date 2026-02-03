import { NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();

        await dbConnect();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return NextResponse.json(
            { message: "User registered successfully", user: { email: user.email, name: user.name } },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}