"use client";

import { useState } from "react";
import { Meal } from "@/app/types/meal";
import { ChevronDown, ChevronUp, RefreshCw, UtensilsCrossed } from "lucide-react";

interface MealCardProps {
  day: string;
  meal: Meal;
  allMeals: Meal[];
  onMealChange: (newMeal: Meal) => void;
}

export function MealCard({ day, meal, allMeals, onMealChange }: MealCardProps) {
  const [showRecipe, setShowRecipe] = useState(false);

  const handleRandomize = () => {
    const otherMeals = allMeals.filter((m) => m.id !== meal.id);
    const randomMeal = otherMeals[Math.floor(Math.random() * otherMeals.length)];
    onMealChange(randomMeal);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="flex items-center justify-between p-4 bg-secondary/50">
        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          {day}
        </span>
        <button
          onClick={handleRandomize}
          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          aria-label="Cambiar comida"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-accent rounded-lg">
            <UtensilsCrossed className="w-5 h-5 text-accent-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-card-foreground text-lg leading-tight">
              {meal.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {meal.ingredients.length} ingredientes
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowRecipe(!showRecipe)}
          className="mt-4 w-full flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-left"
        >
          <span className="text-sm font-medium text-muted-foreground">
            {showRecipe ? "Ocultar receta" : "Ver receta"}
          </span>
          {showRecipe ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </button>

        {showRecipe && (
          <div className="mt-3 space-y-4 animate-in fade-in-0 slide-in-from-top-2 duration-200">
            <div>
              <h4 className="text-sm font-semibold text-card-foreground mb-2">
                Preparacion
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {meal.recipe}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-card-foreground mb-2">
                Ingredientes
              </h4>
              <ul className="grid grid-cols-2 gap-1">
                {meal.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
