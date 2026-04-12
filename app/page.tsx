"use client";

import { useState } from "react";
import { Header } from "@/app/components/Header";
import { WeeklyMenu } from "@/app/components/WeeklyMenu";
import { ShoppingList } from "@/app/components/ShoppingList";
import { WeeklyMeal, Meal } from "@/app/types/meal";
import mealsData from "@/app/data/meals.json";

const meals: Meal[] = mealsData;

export default function Home() {
  const [weeklyMeals, setWeeklyMeals] = useState<WeeklyMeal[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <WeeklyMenu meals={meals} onMealsChange={setWeeklyMeals} />
        <ShoppingList weeklyMeals={weeklyMeals} />
      </main>
      <footer className="border-t border-border py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Menu Magic - Planifica tus comidas semanales
        </div>
      </footer>
    </div>
  );
}
