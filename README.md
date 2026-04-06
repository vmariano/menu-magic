# 🪄 Menu Magic

Menu Magic is a React-based application built with Next.js for planning and randomizing a weekly meal menu (Almuerzo and Cena) for 5 days (Monday to Friday).

## ✨ Features

- **Weekly Randomization**: Automatically generates a 5-day menu for both lunch and dinner.
- **Easy & Complex Lists**: Uses predefined lists for quick lunches (`easy.json`) and more elaborate dinners (`complex.json`).
- **Individual Reroll**: Use the dice (🎲) button to reroll a single meal without changing the rest of the week.
- **Responsive Layout**: A clean grid displaying the work week (Monday to Friday).

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.2](https://nextjs.org/) (App Router)
- **Library**: [React 19.2.4](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [CSS Modules](https://github.com/css-modules/css-modules)
- **Language**: UI and data content are in Spanish.

## 📁 Project Structure

- `app/page.tsx`: Main dashboard with the 5-day grid.
- `app/components/`:
  - `MealList.js`: Client component that randomizes 5 meals from a list.
  - `Meal.js`: Client component for a single meal entry with "reroll" logic.
- `app/data/`:
  - `easy.json`: Data for lunches (Almuerzo).
  - `complex.json`: Data for dinners (Cena).
- `app/styles/`: Styling definitions.

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🍱 Customization

You can customize the meal options by editing the JSON files in `app/data/`:

- **Lunch**: `app/data/easy.json`
- **Dinner**: `app/data/complex.json`

Each entry follows this format:
```json
{
  "id": number,
  "content": "Meal Name"
}
```
