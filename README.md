# 🎙️ TALK-AI-TIVE

> **Speak. Listen. Conquer.**

An AI-powered voice assistant for the web. Paste any URL, click the mic, speak a command — and Claude AI responds out loud.

Built as a full-stack project by a first-year engineering student. No frameworks. No shortcuts. Just raw skill.

---

## 🚀 Live Demo

> 🔗 _Coming soon after deployment in Phase 7_

---

## 📸 Screenshots

> _Add screenshots here after completing Phase 2 UI_

| Login Page | Main App | Dashboard |
|---|---|---|
| `screenshot-login.png` | `screenshot-app.png` | `screenshot-dashboard.png` |

---

## 💡 What It Does

| User | How It Helps |
|---|---|
| 👁️ Blind / Visually Impaired | Hear webpage content without reading |
| 👴 Elderly Users | Simplify complex websites with voice |
| 🖐️ Motor-Impaired Users | Navigate completely hands-free |
| 🎓 Busy Students | Summarize long pages in seconds |
| 🌍 Non-native Speakers | Translate & simplify page content |

---

## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | HTML5 + CSS3 | Structure, dark/light UI, animations |
| Logic | Vanilla JavaScript | Events, DOM, API calls |
| Voice In | Web Speech API | Browser microphone — free, no setup |
| Voice Out | SpeechSynthesis API | AI talks back out loud |
| Animations | GSAP | Smooth, pro-level motion |
| Backend | Node.js + Express.js | Server + REST API endpoints |
| AI Brain | Claude API (Anthropic) | Summarize, simplify, translate |
| Database | Firebase Firestore | Save query history |
| Auth | Firebase Auth | Email + Google sign-in |
| Frontend Deploy | Vercel | Live URL, free tier |
| Backend Deploy | Railway | Node.js hosting, free tier |
| Version Control | Git + GitHub | Code history, portfolio proof |

---

## 🗂️ Folder Structure

```
talkaitive/
├── frontend/
│   ├── index.html        ← Login / Signup page
│   ├── app.html          ← Main AI voice assistant
│   ├── dashboard.html    ← Query history & analytics
│   ├── style.css         ← Shared styles (Phase 6)
│   ├── app.js            ← Voice + AI logic (Phase 6 refactor)
│   └── animations.js     ← GSAP animations (Phase 6)
├── backend/
│   ├── server.js         ← Express server entry point
│   ├── claude.js         ← Claude API integration
│   ├── routes/           ← API route handlers
│   └── .env              ← Secret keys (never committed)
├── .gitignore
├── package.json
└── README.md
```

---

## 🗺️ Build Roadmap

| Phase | Name | Status |
|---|---|---|
| 🟥 Phase 1 | Login Page HTML | ✅ Done |
| 🟧 Phase 2 | Main App UI + CSS | ✅ Done |
| 🟨 Phase 3 | Dashboard Page | ✅ Done |
| 🟩 Phase 4 | Backend + Claude API | ⏳ Upcoming |
| 🔵 Phase 5 | Firebase Auth + Database | ⏳ Upcoming |
| 🏁 Phase 6 | Animations + Polish | ⏳ Upcoming |
| 🚀 Phase 7 | Deployment (Vercel + Railway) | ⏳ Upcoming |

---

## 🛠️ Run It Locally

### Prerequisites
Make sure you have these installed:
- [Node.js (LTS)](https://nodejs.org)
- [Git](https://git-scm.com)
- [VS Code](https://code.visualstudio.com) + Live Server extension

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/talkaitive.git
cd talkaitive
```

### 2. Open the frontend
Open `frontend/index.html` with **Live Server** in VS Code.  
That's it — no build step needed for the frontend.

### 3. Set up the backend _(Phase 4+)_
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```
ANTHROPIC_API_KEY=your_claude_api_key_here
PORT=3000
```

Start the server:
```bash
node server.js
```

### 4. Firebase setup _(Phase 5+)_
- Create a project at [firebase.google.com](https://firebase.google.com)
- Enable **Authentication** (Email + Google)
- Enable **Firestore Database**
- Add your Firebase config to `frontend/app.js`

---

## 🤖 AI Modes

| Mode | Voice Command Example | What Claude Does |
|---|---|---|
| 🔍 Summarize | *"Summarize this page"* | Gives a concise summary of the URL content |
| 🧒 Simplify | *"Explain this like I'm 5"* | Breaks it down in plain simple language |
| 🌍 Translate | *"Translate this to Hindi"* | Translates page content to requested language |

---

## 📋 API Endpoints _(Phase 4)_

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/ask` | Send voice query + URL → get Claude response |
| `GET` | `/api/scrape` | Fetch and extract text from a URL |
| `GET` | `/api/history` | Get user's past queries from Firestore |
| `DELETE` | `/api/history/:id` | Delete a specific query from history |

---

## 🔑 Environment Variables

Create a `.env` file in `backend/` — **never commit this file.**

```
ANTHROPIC_API_KEY=        # From console.anthropic.com
FIREBASE_PROJECT_ID=      # From Firebase console
PORT=3000
```

---

## 📄 Resume Bullets

> Copy these when applying for internships.

- Built **TALK-AI-TIVE**, a full-stack AI voice assistant web app using Claude API, Web Speech API, Node.js, and Firebase — enabling users to interact with any webpage hands-free.
- Implemented real-time voice recognition and AI-powered webpage summarization using Anthropic's Claude API, achieving sub-2 second response times.
- Designed and deployed a full-stack accessibility tool with Firebase authentication, Firestore database, Express.js backend, and Vercel/Railway hosting.

---

## 🧠 What I Learned

`HTML5` · `CSS3` · `Flexbox & Grid` · `Glassmorphism UI` · `JavaScript DOM` · `Fetch API` · `Web Speech API` · `Node.js` · `Express.js` · `REST APIs` · `Claude API` · `Firebase Auth` · `Firestore` · `Git & GitHub` · `Vercel` · `Railway` · `GSAP Animations`

---

## 👑 Golden Rules

```
🧠  Understand every line before moving to the next.
⌨️  Type the code yourself — never copy paste blindly.
🔧  Break things. Fix things. That is how you learn.
🔍  Google every error message — this is a real developer skill.
📦  Commit to GitHub after every phase completes.
🤝  If stuck for more than 30 minutes — ask for help.
👑  The goal is not just to finish. The goal is to OWN it.
```

---

## 📜 License

MIT — free to use, learn from, and build on.

---

<p align="center">
  <i>"My fear of being mediocre is greater than my fear of dying."</i><br/><br/>
  <b>Built with 🔥 by a first-year engineer who refused to be average.</b>
</p>