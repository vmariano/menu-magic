"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./themeToggle.module.css";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        className={styles.toggleBtn}
        aria-label="Alternar tema"
        type="button"
        disabled
      >
        <span className={styles.toggleIcon}>🌓</span>
        <span className={styles.toggleLabel}>Tema</span>
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      className={styles.toggleBtn}
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      type="button"
    >
      <span className={styles.toggleIcon}>{isDark ? "🌙" : "☀️"}</span>
      <span className={styles.toggleLabel}>{isDark ? "Oscuro" : "Claro"}</span>
    </button>
  );
}
