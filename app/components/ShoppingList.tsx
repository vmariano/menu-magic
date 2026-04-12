"use client";

import { useState, useMemo } from "react";
import { WeeklyMeal } from "@/app/types/meal";
import { Check, ShoppingCart, Copy, CheckCheck } from "lucide-react";

interface ShoppingListProps {
  weeklyMeals: WeeklyMeal[];
}

export function ShoppingList({ weeklyMeals }: ShoppingListProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  const ingredients = useMemo(() => {
    const allIngredients: string[] = [];
    weeklyMeals.forEach((wm) => {
      wm.meal.ingredients.forEach((ingredient) => {
        if (!allIngredients.includes(ingredient)) {
          allIngredients.push(ingredient);
        }
      });
    });
    return allIngredients.sort((a, b) => a.localeCompare(b, "es"));
  }, [weeklyMeals]);

  const toggleItem = (item: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  const copyToClipboard = async () => {
    const uncheckedItems = ingredients.filter((i) => !checkedItems.has(i));
    const text = uncheckedItems.map((i) => `- ${i}`).join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const checkedCount = checkedItems.size;
  const totalCount = ingredients.length;

  if (weeklyMeals.length === 0) {
    return null;
  }

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-4 bg-secondary/50 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <ShoppingCart className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-card-foreground">
                Lista de Compras
              </h2>
              <p className="text-sm text-muted-foreground">
                {checkedCount} de {totalCount} items
              </p>
            </div>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium"
          >
            {copied ? (
              <>
                <CheckCheck className="w-4 h-4" />
                Copiado
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copiar lista
              </>
            )}
          </button>
        </div>

        {totalCount > 0 && (
          <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(checkedCount / totalCount) * 100}%` }}
            />
          </div>
        )}
      </div>

      <div className="p-4">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient) => {
            const isChecked = checkedItems.has(ingredient);
            return (
              <li key={ingredient}>
                <button
                  onClick={() => toggleItem(ingredient)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                    isChecked
                      ? "bg-muted/50 text-muted-foreground"
                      : "bg-muted hover:bg-muted/80 text-card-foreground"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-5 h-5 rounded border-2 transition-colors ${
                      isChecked
                        ? "bg-primary border-primary"
                        : "border-border"
                    }`}
                  >
                    {isChecked && (
                      <Check className="w-3 h-3 text-primary-foreground" />
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      isChecked ? "line-through" : ""
                    }`}
                  >
                    {ingredient}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
