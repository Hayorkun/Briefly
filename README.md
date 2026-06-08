# Briefly

> AI-powered meeting notes for individual professionals.

Briefly is a companion web app that records your Google Meet sessions and automatically generates a full transcript and AI summary with action items — so you can focus on the conversation, not on taking notes.

Built as a portfolio project to client-grade standards, demonstrating the full product development lifecycle from scoping through deployment.

**[Live demo →](https://briefly.vercel.app)** &nbsp;|&nbsp; **[Design decisions →](#design-decisions)**

---

![Briefly Dashboard](./screenshots/dashboard.png)

---

## What it does

- One-click audio recording alongside any Google Meet session
- Full transcript generated via Deepgram's speech-to-text API
- AI-generated meeting summary and action items via Claude API
- Meeting history saved and accessible across sessions
- Google authentication via Firebase

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | React + Vite | Fast dev experience, component-based UI |
| Auth + Database | Firebase (Auth + Firestore) | No backend required, real-time sync |
| Transcription | Deepgram | Accurate, low-latency, generous free tier |
| Summarization | Claude API | Best-in-class instruction following for structured output |
| Deployment | Vercel | Zero-config deploys from GitHub |

---

## Running locally

**Prerequisites:** Node.js 18+, a Firebase project, Deepgram API key, Anthropic API key.

```bash
git clone https://github.com/Hayorkun/Briefly.git
cd Briefly
npm install
```

Create a `.env` file in the root:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_DEEPGRAM_API_KEY=
VITE_ANTHROPIC_API_KEY=
```

```bash
npm run dev
```

---

## Project structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Full screens (Landing, Dashboard, Recording, MeetingDetail)
├── hooks/            # Custom React hooks
├── lib/
│   └── firebase.js   # Firebase initialisation
├── App.jsx           # Routing
└── main.jsx
```

---

## Design decisions

**Why a companion web app over a Chrome extension**
A Chrome extension would have required learning the Chrome Extensions API, navigating Google's review process, and maintaining a fragile DOM injection into Google Meet — all within a one-month timeline. A companion web app delivers the same core value with a fraction of the complexity. Zoom support and a browser extension are planned for phase 2.

**Why Google Meet only for MVP**
Google Meet runs entirely in the browser, which means audio can be captured via the standard `MediaRecorder` API. Zoom requires a desktop SDK and adds significant backend complexity. Supporting both platforms from day one would have diluted quality on both. Google Meet was chosen because it aligns with the target user and fits the frontend-only architecture.

**Why Firebase over a custom backend**
The target user is an individual professional — not a team. Multi-user collaboration, custom permissions, and complex data relationships are out of scope for v1. Firebase Auth + Firestore covers authentication, data persistence, and cross-device sync without requiring a dedicated backend, keeping the project within a frontend developer's skill set without sacrificing quality.

**Why Deepgram over OpenAI Whisper**
Deepgram offers a streaming-friendly REST API with a generous free tier and low latency. Whisper is excellent but better suited to server-side processing. For a frontend-first architecture sending audio blobs via fetch, Deepgram was the simpler, faster integration.

**API cost at scale**
This project uses free tiers for portfolio demonstration. At production scale (50 users, 3 meetings/day, avg 45 min each), estimated monthly API costs would be approximately $40–60 (Deepgram) + $15–25 (Claude). A production version would require server-side API proxying and usage-based billing per user.

---

## Roadmap

- [ ] Zoom support
- [ ] Export notes to PDF
- [ ] Real-time live transcript during recording
- [ ] Speaker diarization (who said what)
- [ ] Chrome extension

---

## What I learned

- Scoping a product before writing code saves more time than any technical optimisation
- `MediaRecorder` behaviour varies across browsers — always test on Chrome and Firefox
- Firebase Firestore's real-time listeners are powerful but need careful teardown to avoid memory leaks
- Writing a design decisions section forces you to articulate *why*, not just *what*

---

## Author

**Ayomide** — Frontend Developer  
[GitHub](https://github.com/Hayorkun) · [LinkedIn](#)
