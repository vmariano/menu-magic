"use client";

import { useState, useEffect, useCallback } from "react";
import { Meal, WeeklyMeal } from "@/app/types/meal";
import { MealCard } from "./MealCard";
import { RefreshCw } from "lucide-react";

interface WeeklyMenuProps {
  meals: Meal[];
  onMealsChange: (weeklyMeals: WeeklyMeal[]) => void;
}

const DAYS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

function getRandomMeals(meals: Meal[], count: number): Meal[] {
  const shuffled = [...meals].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function WeeklyMenu({ meals, onMealsChange }: WeeklyMenuProps) {
  const [weeklyMeals, setWeeklyMeals] = useState<WeeklyMeal[]>([]);

  const generateRandomMenu = useCallback(() => {
    const randomMeals = getRandomMeals(meals, DAYS.length);
    const newWeeklyMeals = DAYS.map((day, index) => ({
      day,
      meal: randomMeals[index],
    }));
    setWeeklyMeals(newWeeklyMeals);
    onMealsChange(newWeeklyMeals);
  }, [meals, onMealsChange]);

  useEffect(() => {
    if (meals.length > 0 && weeklyMeals.length === 0) {
      generateRandomMenu();
    }
  }, [meals, weeklyMeals.length, generateRandomMenu]);

  const handleMealChange = (dayIndex: number, newMeal: Meal) => {
    const updatedMeals = [...weeklyMeals];
    updatedMeals[dayIndex] = { ...updatedMeals[dayIndex], meal: newMeal };
    setWeeklyMeals(updatedMeals);
    onMealsChange(updatedMeals);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Menu Semanal</h2>
          <p className="text-muted-foreground mt-1">
            5 comidas para la semana
          </p>
        </div>
        <button
          onClick={generateRandomMenu}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <RefreshCw className="w-4 h-4" />
          Generar nuevo menu
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {weeklyMeals.map((weeklyMeal, index) => (
          <MealCard
            key={weeklyMeal.day}
            day={weeklyMeal.day}
            meal={weeklyMeal.meal}
            allMeals={meals}
            onMealChange={(newMeal) => handleMealChange(index, newMeal)}
          />
        ))}
      </div>
    </div>
  );
}
