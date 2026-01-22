<img width="1500" height="500" alt="EVENTFLOW GITTT" src="https://github.com/user-attachments/assets/184cae65-9946-498c-bc8d-36e975db0193" />


# EVENTFLOW

🎯 Modular, open-source infrastructure to run hackathons, OSS programs, and tech events — all in one place.

JavaScript · Next.js · Node.js · MongoDB · License: MIT · PRs Welcome

Features • Quick Start • Architecture • Contributing • Roadmap • Demo

---

## 🎯 What is EventFlow?

**EventFlow** is an open-source, modular web platform that provides the complete digital infrastructure required to run hackathons, open-source programs (like OSQ), and community tech events.

Instead of juggling **Google Forms, Sheets, emails, chats, and spreadsheets**, EventFlow brings everything into **one extensible system** — built for organizers, participants, mentors, and judges.

---

## ❗ The Problem We Solve

Most student-led and community tech events rely on:

* Disconnected tools
* Manual tracking
* Error-prone spreadsheets
* No reusable infrastructure

This leads to **confusion, unfair judging, missed deadlines, and poor participant experience**.

**EventFlow solves this by providing a single, reusable, event engine** that can be customized per event.

---

## 🌟 Why EventFlow?

✅ Modular Architecture – Enable only what your event needs
✅ Role-Based Access – Admin, Participant, Mentor, Judge
✅ Reusable for Any Event – Hackathons, OSS programs, workshops
✅ Open Source – Community-driven & transparent
✅ JavaScript-First – Easy for student contributors
✅ Scalable – From college events to national programs

---

## ✨ Features

### 🧑‍💼 Event Management

* Create and manage multiple events
* Configure timelines, rules, and visibility
* Enable/disable modules per event

### 👥 Registration & Roles

* Participant registration
* Role-based dashboards
* Secure access control

### 🧑‍🤝‍🧑 Team Formation

* Create or join teams
* Invite members
* Team size validation

### 📤 Project Submissions

* Phase-wise submissions
* GitHub repo linking
* Deadline enforcement

### 🧑‍⚖️ Judge Evaluation System

* Custom scoring rubrics
* Blind judging support
* Auto-ranking & score aggregation
* Feedback & comments

### 🧑‍🏫 Mentor Interaction

* Mentor listing
* Q&A threads
* Guidance tracking

### 📢 Announcements & Notifications

* Event-wide announcements
* Role-based notifications
* Schedule reminders

### 🎖️ Certificates & Badges

* Auto-generated certificates
* Participation & winner badges
* Verification links

---

## 🚀 Quick Start

### Prerequisites

* Node.js 18+
* pnpm / npm
* MongoDB (local or cloud)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/eventflow.git
cd eventflow

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit: **[http://localhost:3000](http://localhost:3000)**

---

### Build for Production

```bash
pnpm run build
pnpm run start
```

---

## 🏗️ Architecture

### Core Principles

* **Modular First** – Every feature is a module
* **Role-Based Design** – Clear separation of access
* **Reusability** – Same system for multiple events
* **Open Source Friendly** – Easy onboarding & contribution

---

### High-Level Architecture

```
Client (Next.js UI)
   │
   ├── Role Dashboards
   ├── Event Modules
   │
API Layer (Next.js Route Handlers)
   │
   ├── Auth & Roles
   ├── Event Logic
   ├── Scoring Engine
   │
Database (MongoDB)
```

---

### Modules (Pluggable)

* Registration Module
* Team Formation Module
* Submission Module
* Judge Scoring Module
* Mentor Module
* Announcement Module
* Certificate Module

Each module can be **enabled or disabled per event**.

---

## 🧑‍💻 Contribution Workflow

EventFlow follows a **maintainer-approved contribution process** to keep quality high.

1. Browse existing issues
2. Pick an issue or open a new one
3. Wait for maintainer approval
4. Start development after issue is labeled
5. Submit a clear pull request

⚠️ Unapproved PRs may be closed to maintain project stability.

---

## 🤝 Contributing

We welcome:

* Frontend developers
* Backend developers
* UI/UX designers
* Documentation contributors
* System designers

### First-Time Contributors

Look for issues tagged:

* `good first issue`
* `help wanted`
* `frontend`
* `backend`
* `documentation`

📄 See **CONTRIBUTING.md** for full guidelines.

---

## 🧭 Roadmap

### Phase 1 – Foundation

* Project setup
* Auth & role system
* Event creation
* Basic dashboards

### Phase 2 – Core Features

* Team formation
* Project submissions
* Judge evaluation system
* Announcements

### Phase 3 – Advanced Features

* Mentor interaction
* Certificate automation
* Analytics dashboards
* Multi-event support

### Phase 4 – Scale & Polish

* Performance optimization
* Mobile-first UI
* Accessibility improvements
* Plugin system (experimental)

---

## 🎥 Demo

📸 Screenshots & demo links coming soon.

---

## 🔐 Security & Best Practices

* Secure role-based access control
* Server-side validation
* No hard-coded secrets
* Environment-based configuration
* Clean permission boundaries

---

## 📚 Documentation

* User Guide
* Organizer Guide
* Architecture Guide
* API Reference
* Contributing Guide
* FAQ

(All under active development)

---

## 📄 License

This project is licensed under the **MIT License** — see `LICENSE` for details.

---

## 🌟 Support the Project

If EventFlow helps you:

⭐ Star the repository
🐛 Report bugs
💡 Suggest features
🤝 Contribute code
📢 Share with communities

---

**Built with ❤️ for the open-source & student community**
*EventFlow – Powering events, the open-source way.*

