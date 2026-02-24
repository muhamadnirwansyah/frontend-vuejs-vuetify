# 🚀 Vue Questions App

Simple Question Management App built with Vue 3 + Vuetify.

This project demonstrates CRUD functionality, state management, authentication (mock), and reactive UI updates using modern Vue ecosystem.

---

## ✨ Features

### 🔐 Authentication (Mock)
- Login page with mock username & password
- Simple localStorage auth
- Route protection using Vue Router guard
- Logout functionality

---

### 📌 Questions (Post CRUD)

Users can:

- ✅ View list of questions
- ➕ Create new question
- ✏️ Edit their own questions
- 🔄 Change question status (open, answered, closed)
- 🗓 View created date & time

Each question contains:
- Title
- Description
- Status
- Created Date
- Created By

Initial questions are pre-populated in memory when app loads.

---

### 💬 Comments System

Each question supports multiple comments.

Users can:
- ➕ Add comment
- ✏️ Edit their own comment
- See UI update instantly (reactive state, no reload)

---

## 🛠 Tech Stack

| Technology | Description |
|------------|------------|
| Vue 3 | Frontend Framework |
| Vite | Build Tool |
| Vuetify 3 | UI Component Library |
| Vue Router | Routing & Route Guard |
| Pinia | State Management |
| JavaScript | Main language |
| LocalStorage | Simple mock authentication |

---

## 📂 Project Structure

````markdown
src/
│
├── assets/
├── components/
├── router/
│   └── router.js
├── stores/
│   └── questionStore.js
├── views/
│   ├── Login.vue
│   ├── Dashboard.vue
│   └── Questions.vue
├── plugins/
│   └── vuetify.js
├── App.vue
└── main.js


---

## ⚙️ Installation

### 1️⃣ Clone repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev
http://localhost:5173

Username: admin
Password: 123456
