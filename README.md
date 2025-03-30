# 🧩 Tile Puzzle Solver

![Render Backend](https://img.shields.io/badge/render-backend-blue)
[![Vercel Frontend](https://img.shields.io/badge/vercel-frontend-black)](https://tile-puzzle-solver.vercel.app)

An interactive full-stack A* Tile Puzzle Visualizer that allows users to input custom grid sizes, define the puzzle's start and goal states, and watch the solution unfold step by step.

---

## 🚀 Try It Live

👉 [Click here to try the Tile Puzzle Solver](https://tile-puzzle-solver.vercel.app)

[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aayush4515/a-star-visualizer)

---

## 📸 Demo

<img src="https://raw.githubusercontent.com/aayush4515/a-star-visualizer/main/demo.gif" alt="Puzzle Solver Demo" width="500"/>

---

## 🛠️ Tech Stack

### Frontend
- **React** with **Vite**
- **Tailwind CSS**
- Hosted on **Vercel**
- Environment variables via `.env` and `.env.production`

### Backend
- **FastAPI**
- **pybind11** to connect C++ A* implementation with Python
- Hosted on **Render**
- Uses a compiled `.so` file depending on platform

### A* Core Solver
- Written in **C++**
- Heuristic: **Manhattan Distance**
- Exposed to Python using `pybind11`

---

## ✨ Features

- ✅ Custom puzzle dimensions (2x2 up to 10x10)
- ✅ Editable start and goal states via grid UI
- ✅ A* solution animation with step tracking
- ✅ Environment-aware API routing using `VITE_API_BASE`
- ✅ Mobile-friendly and responsive design
- ✅ Deployment-ready with CI/CD integration (WIP)

---

## 📦 Installation (Dev Setup)

```bash
# Clone the repo
git clone https://github.com/aayush4515/a-star-visualizer.git
cd a-star-visualizer

# Backend (Python + pybind11 + FastAPI)
cd backend
# Make sure you use Python 3.12.1 to match the .so file
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn run_solver::app --reload

# Frontend
cd ../frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables
- Create .env file in frontend/:
- VITE_API_BASE=http://localhost:8000
- For production, Render and Vercel manage these automatically.

---

## !📤 Deployment

### Frontend (Vercel)
- Connected to GitHub repo for auto-deploy on main
- Uses .env.production for API base

### Backend (Render)
- Also auto-deploys from GitHub
- Uses PYTHON_VERSION = 3.12.1 to match the .so file
- Build command: pip install -r requirements.txt
- Start command: uvicorn backend.run_solver:app --host 0.0.0.0 --port 10000

---

## 🤝 Contributing
Pull requests are welcome! Just fork the repo, make your changes, and submit a PR.


