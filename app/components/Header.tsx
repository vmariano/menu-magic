"use client";

import { ThemeToggle } from "./ThemeToggle";
import { ChefHat } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg">
            <ChefHat className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Menu Magic</h1>
            <p className="text-xs text-muted-foreground">Planificador de comidas</p>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
