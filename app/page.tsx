import styles from "@/app/styles/Home.module.css";
import WeeklyMenu from "@/app/components/WeeklyMenu";
import ThemeToggle from "@/app/components/ThemeToggle";
import easyList from "@/app/data/easy.json";
import complexList from "@/app/data/complex.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerBrand}>
          <h1 className={styles.headerTitle}>
            <span className={styles.magicIcon}>🪄</span> Menu Magic
          </h1>
          <p className={styles.headerSubtitle}>
            Planifica tu menú semanal de lunes a viernes
          </p>
        </div>
        <ThemeToggle />
      </header>

      <main className={styles.main}>
        <WeeklyMenu lunchList={easyList} dinnerList={complexList} />
      </main>
    </div>
  );
}
