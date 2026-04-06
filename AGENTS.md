<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Menu Magic

Menu Magic is a React-based application built with Next.js for planning and randomizing a weekly meal menu (Almuerzo and Cena) for 5 days (Monday to Friday).

## Project Overview

- **Purpose**: To help users decide what to eat by randomizing lunch and dinner options from predefined lists.
- **Main Technologies**:
  - [Next.js](https://nextjs.org/) (version 16.1.6)
  - [React](https://reactjs.org/) (version 19.0.0)
  - Turbopack (stable)
  - CSS Modules for component-level styling.
- **Architecture**:
  - `app/layout.js`: The root layout for the application.
  - `app/page.js`: The main dashboard displaying the 5-day grid.
  - `app/api/hello/route.js`: A simple API endpoint demonstrating the App Router route handlers.
  - `components/mealList.js`: A Client Component that randomizes 5 meals from a given list for the week.
  - `components/meal.js`: A Client Component that represents a single meal entry, allowing the user to "reroll" (🎲) to pick a different random meal from the list.
  - `data/`: Contains `easy.json` (used for lunch) and `complex.json` (used for dinner).

## Building and Running

Commands are standard for a Next.js project:

- **Development Server**: `npm run dev` (Runs on `http://localhost:3000`)
- **Production Build**: `npm run build`
- **Start Production Server**: `npm run start`
- **Linting**: `npm run lint`

## Development Conventions

- **Component Structure**: Components are located in the `components/` directory and use functional components with React hooks.
- **Styling**: Styles are organized within the `styles/` directory, specifically using CSS Modules (e.g., `*.module.css`) to prevent global namespace pollution.
- **Data Management**: Meal lists are stored as static JSON arrays in the `data/` directory. Each meal object has an `id` and `content`.
- **Language**: The application UI and data content are primarily in Spanish.
- **Interactivity**: The randomized menu can be refreshed by rerolling individual meals using the dice (🎲) button on each meal entry.
