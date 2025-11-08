⚛️ Task Tracker UI (React Frontend)

This is the **frontend** for the Task Tracker Testing Suite — built with **React**, **Axios**, and **React Testing Library**.  
It connects to the FastAPI backend to display and add tasks.

---

## 🚀 Features

✅ Fetch & Display Tasks from FastAPI Backend  
✅ Add New Tasks using Axios API calls  
✅ Simple & Clean UI with React Hooks  
✅ Unit Tests using Jest + React Testing Library  
✅ Mocked API Calls for Offline Testing  

---

## 🏗️ Folder Structure

frontend/
├── src/
│ ├── api.js # Axios API functions
│ ├── TaskList.js # Main React component
│ ├── App.js # Entry component
│ ├── App.test.js # App-level test
│ └── tests/
│ └── TaskList.test.js # TaskList component tests
├── jest.config.js
├── .babelrc
└── package.json

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Start the React App
bash
Copy code
npm start
Runs on: 👉 http://localhost:3000

Make sure your FastAPI backend is running at:

cpp
Copy code
http://127.0.0.1:8000
🧪 Run Tests
bash
Copy code
npm test -- --watchAll=false
✅ Tests Included:
Test File	Description
TaskList.test.js	Tests rendering & adding tasks
App.test.js	Confirms app renders correctly

🧩 Mocking Setup
Axios is mocked during testing to prevent real API calls.

javascript
Copy code
jest.mock("../api", () => ({
  getTasks: jest.fn(() => Promise.resolve({ data: [] })),
  createTask: jest.fn(() => Promise.resolve({ data: { id: 1, title: "Buy Milk" } })),
}));
🧠 Tools Used
React — UI Framework

Axios — API Calls

Jest — Testing Framework

React Testing Library — Component Testing

Babel — Transpilation