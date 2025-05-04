# 📒 Notes App

A clean, responsive note web application built with Next.js 14, React 18, Redux Toolkit, and Tailwind CSS.  
Create, edit, filter, archive, and delete your notes with a modern UI and modular components.

---

## 🚀 Quick Start

**Prerequisites:** Node.js ≥ 18, pnpm (or npm/yarn)

1. **Clone the repo**
    ```bash
    git clone https://github.com/your‑username/notes-app.git
    cd notes-app

2. **Install dependencies**
    ```bash
   npm install
3. **Run development server**
    ```bash
   npm dev
   
4. **Open in browser**

    Navigate to `http://localhost:3000`

## 🗂 Project Structure

```text
src/
├─ app/  
│   ├─ globals.css           # Global Tailwind & custom CSS  
│   ├─ icon.svg              # Favicon / app icon  
│   ├─ layout.tsx            # Root layout (HTML, <head>, Providers)  
│   └─ page.tsx              # Home page with task list  
│
├─ components/               # Reusable UI & feature components  
│   ├─ index.ts              # Barrel export  
│   ├─ providers.tsx         # Context & Redux providers wrapper  
│   ├─ task-card.tsx         # Note / task card component  
│   ├─ task-card-actions.tsx # Buttons for edit / delete / archive  
│   ├─ task-filter-sort-controls.tsx  
│   │   Controls for filtering and sorting notes  
│   ├─ task-list.tsx         # Grid/list of TaskCard components  
│   │
│   ├─ modals/               # All modal dialogs  
│   │   ├─ add-edit-task-modal.tsx  
│   │   ├─ delete-task-modal.tsx  
│   │   └─ signup-signin-modal.tsx  
│   │
│   └─ ui/                   # Design system primitives  
│       ├─ Button.tsx  
│       ├─ Dialog.tsx  
│       ├─ Input.tsx  
│       └─ …  
│
├─ lib/                      # Utility functions & custom hooks  
│   └─ hooks/  
│       └─ utils.ts  
│
├─ store/                    # Redux Toolkit setup  
│   ├─ store.ts              # Configure store & middleware  
│   ├─ index.ts              # Exported store types & helpers  
│   ├─ slices/               # Redux slices (e.g. tasksSlice.ts)  
│   └─ selectors/            # Memoized selectors (e.g. selectTasks)  
│
└─ types/  
    └─ instances.ts          # Shared TypeScript interfaces & types  
```

## 🔧 Technologies

* **Framework:** Next.js 14 (App Router, TypeScript)
* **UI Library:** React 18
* **State Management:** Redux Toolkit + React‑Redux
* **Styling:** Tailwind CSS
* **Component Primitives:** shadcn/ui (Dialog, Button, ToggleGroup, etc.)
* **Form & Validation:** React Hook Form + Zod
* **Unique IDs:** uuid 

## ⚙️ Configuration & Setup

* **Tailwind CSS**
  * Customize in `tailwind.config.ts` (colors, fonts, breakpoints).
* **Global Styles**
  * `src/app/globals.css` imports Tailwind directives and any global overrides.
* **Providers**
  * `components/providers.tsx` wraps the app with Redux <Provider> and any UI context providers.
* **Modals**
  * Each modal lives under `components/modals/`.