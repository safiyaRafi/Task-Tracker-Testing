# 🧠 Task Tracker API (FastAPI Backend)

This is the **backend API** for the Task Tracker Testing Suite project — built with **FastAPI**, **SQLAlchemy**, and **SQLite**.  
It provides task management endpoints and authentication routes, with automated testing using **PyTest**.

---

## 🚀 Features

✅ CRUD API for Task Management  
✅ SQLite Database using SQLAlchemy ORM  
✅ Simple Authentication Endpoint (`/login`)  
✅ Fully Tested using PyTest  
✅ Swagger & ReDoc API Docs Auto-Generated  

---

## 🏗️ Project Structure

backend/
│
├── main.py # FastAPI application (routes)
├── models.py # Database model definitions
├── database.py # Database connection setup
├── test_main.py # PyTest test suite (API, DB, Auth)
├── requirements.txt # Python dependencies
└── users.db / tasks.db # SQLite database (auto-created)

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Create and activate virtual environment
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
2️⃣ Install dependencies
bash
Copy code
pip install -r requirements.txt
If you don’t have requirements.txt yet:

bash
Copy code
pip install fastapi uvicorn sqlalchemy pytest httpx pytest-asyncio
pip freeze > requirements.txt
🚀 Run the FastAPI Server
bash
Copy code
uvicorn main:app --reload
Open Swagger docs in your browser:
👉 http://127.0.0.1:8000/docs

🧪 Run Tests (PyTest)
bash
Copy code
pytest -v
✅ Tests Included:
Test Name	Description
test_home()	Verifies root endpoint
test_create_task()	Verifies task creation
test_read_tasks()	Fetches all tasks
test_database_connection()	Confirms DB connection works
test_login_success()	Valid credentials return token
test_login_failure()	Invalid credentials return 401

🧩 API Endpoints
Method	Endpoint	Description
GET	/	Welcome message
POST	/tasks	Create a new task
GET	/tasks	Get all tasks
POST	/login	Login and get token

💾 Database
SQLite file is auto-created as tasks.db

Model:

python
Copy code
class Task(Base):
    id = Column(Integer, primary_key=True)
    title = Column(String)
    completed = Column(Boolean, default=False)
🧠 Tools Used
FastAPI — Web Framework

SQLAlchemy — ORM

SQLite — Lightweight Database

PyTest — Testing Framework

Uvicorn — ASGI Server

