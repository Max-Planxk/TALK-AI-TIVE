# 🎙️ TALK-AI-TIVE

> **Speak. Listen. Conquer.**

An AI-powered voice assistant for the web. Paste any URL, click the mic, speak a command — and the AI responds out loud.

Built as a full-stack project by a first-year engineering student. No frameworks. No shortcuts. Just raw skill.

---

## 🚀 Live Demo

> 🔗 _Coming soon after deployment in Phase 7_

---

## 📸 Screenshots

> _Add screenshots here after completing Phase 6 polish_

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
| AI Brain | Groq API (LLaMA 3.3 70B) | Summarize, simplify, translate |
| Database | Firebase Firestore | Save query history |
| Auth | Firebase Auth | Email + Google sign-in |
| Frontend Deploy | Vercel | Live URL, free tier |
| Backend Deploy | Railway | Node.js hosting, free tier |
| Version Control | Git + GitHub | Code history, portfolio proof |

---

## 🗂️ Folder Structure
```
TALK-AI-TIVE/
├── FrontEnd/
│   ├── index.html        ← Login / Signup page
│   ├── app.html          ← Main AI voice assistant
│   ├── dashboard.html    ← Query history & analytics
│   ├── style.css         ← Shared styles
│   └── app.js            ← Voice + AI logic
├── BackEnd/
│   ├── server.js         ← Express server entry point
│   ├── claude.js         ← Groq AI API integration
│   ├── routes/
│   │   └── claude.js     ← /api/ask route handler
│   └── .env              ← Secret keys (never committed)
├── .gitignore
├── BLUEPRINT
└── README.md
```

---

## 🗺️ Build Roadmap

| Phase | Name | Status |
|---|---|---|
| 🟥 Phase 1 | Login Page HTML Structure | ✅ Done |
| 🟧 Phase 2 | Main App UI + Full CSS Dark Theme | ✅ Done |
| 🟨 Phase 3 | Voice Input + Dashboard Page | ✅ Done |
| 🟩 Phase 4 | Backend + Groq AI API Integration | ✅ Done |
| 🟩 Phase 4.5 | Frontend ↔ Backend Connected + Live AI Responses | ✅ Done |
| 🔵 Phase 5 | Firebase Auth + Firestore Database | ⏳ Up Next |
| 🏁 Phase 6 | Frontend ↔ Backend Connection + Animations + Polish | ⏳ Upcoming |
| 🚀 Phase 7 | Deployment (Vercel + Railway) | ⏳ Upcoming |

---

## ✅ What's Working Right Now

- Express.js server running on port 5000
- Groq API (LLaMA 3.3 70B) successfully integrated
- `/api/ask` endpoint live and tested — takes a URL + voice command → scrapes the page → returns AI response
- Web scraping with axios + cheerio working
- Tested with real Wikipedia URLs — sub-2 second AI responses confirmed ⚡
- `.env` secured, `node_modules` and secrets gitignored ✅

---

## 🛠️ Run It Locally

### Prerequisites
- [Node.js (LTS)](https://nodejs.org)
- [Git](https://git-scm.com)
- [VS Code](https://code.visualstudio.com) + Live Server extension

### 1. Clone the repo
```bash
git clone https://github.com/Max-Planxk/TALK-AI-TIVE.git
cd TALK-AI-TIVE
```

### 2. Open the frontend
Open `FrontEnd/index.html` with **Live Server** in VS Code.

### 3. Set up the backend
```bash
cd BackEnd
npm install
```

Create a `.env` file inside `BackEnd/`:
```
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
```

Start the server:
```bash
node server.js
```

### 4. Test the API
```bash
# In a second terminal (PowerShell)
Invoke-WebRequest -Uri "http://localhost:5000/api/ask" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"url":"https://en.wikipedia.org/wiki/Artificial_intelligence","userCommand":"what is this page about","mode":"summarize"}'
```

---

## 🤖 AI Modes

| Mode | Voice Command Example | What AI Does |
|---|---|---|
| 🔍 Summarize | *"Summarize this page"* | Gives a concise summary of the URL content |
| 🧒 Simplify | *"Explain this like I'm 5"* | Breaks it down in plain simple language |
| 🌍 Translate | *"Translate this to Hindi"* | Translates page content to Hindi |

---

## 📋 API Endpoints

| Method | Endpoint | Status | Description |
|---|---|---|---|
| `POST` | `/api/ask` | ✅ Live | Send URL + command → get AI response |
| `GET` | `/api/history` | ⏳ Phase 5 | Get user's past queries from Firestore |
| `DELETE` | `/api/history/:id` | ⏳ Phase 5 | Delete a specific query from history |

---

## 🔑 Environment Variables

Create a `.env` file in `BackEnd/` — **never commit this file.**
```
GROQ_API_KEY=        # From console.groq.com — free
PORT=5000
```

---

## 📄 Resume Bullets

- Built **TALK-AI-TIVE**, a full-stack AI voice assistant web app using Groq API (LLaMA 3.3 70B), Web Speech API, Node.js, and Firebase — enabling users to interact with any webpage hands-free.
- Implemented real-time voice recognition and AI-powered webpage summarization using Groq's LLaMA API, achieving sub-2 second response times.
- Designed and deployed a full-stack accessibility tool with Firebase authentication, Firestore database, Express.js backend, and Vercel/Railway hosting.

---

## 🧠 What I Learned

`HTML5` · `CSS3` · `Flexbox & Grid` · `Glassmorphism UI` · `JavaScript DOM` · `Fetch API` · `Web Speech API` · `Node.js` · `Express.js` · `REST APIs` · `Groq API` · `Web Scraping` · `Firebase Auth` · `Firestore` · `Git & GitHub` · `Vercel` · `Railway` · `GSAP Animations`

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