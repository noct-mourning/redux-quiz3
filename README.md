# Task Manager — Redux Toolkit
> Finals Hands-On Quiz #3

A React app that manages tasks using Redux Toolkit for state management.

---

## Requirements Met

| Requirement | Status |
|---|---|
| Redux Toolkit | ✅ |
| Redux store via `configureStore()` | ✅ |
| Slice named `taskSlice` | ✅ |
| Input and add tasks | ✅ |
| Display all tasks | ✅ |
| `useDispatch()` and `useSelector()` | ✅ |
| Prevents empty tasks | ✅ |

---

## Project Structure

```
src/
├── app/store.js                 # Redux store
├── features/tasks/taskSlice.js  # taskSlice
├── components/
│   ├── TaskInput.jsx            # useDispatch()
│   └── TaskList.jsx             # useSelector()
├── App.jsx
└── main.jsx                     # Provider
```

---

## Setup

```bash
npm install
npm install @reduxjs/toolkit react-redux
npm run dev
```

---

## Deployment

Live at: [taskslice.vercel.app](https://taskslice.vercel.app)
