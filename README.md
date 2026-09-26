# React Context & Reducer App

Week 4 Guided Learning Activity — useContext and useReducer with TypeScript.

## Features

- Theme Switcher (light/dark) via React Context API
- Task Manager (add/remove) via useReducer with typed actions

## Tech Stack

React 18 · TypeScript · Vite

## Getting Started

npm install
npm run dev

Open http://localhost:5173

## Structure

src/
├── components/   ThemeToggle, TaskManager
├── context/      ThemeContext
├── reducers/     taskReducer
├── styles/       global.css
├── App.tsx
└── main.tsx

## How it works

- ThemeContext exposes { theme, toggleTheme } plus a useTheme() hook
  that throws if used outside the provider.
- taskReducer handles ADD_TASK and REMOVE_TASK with a discriminated
  union and an exhaustiveness check via `never`.