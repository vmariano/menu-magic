import styles from '../styles/components/meal.module.css'

export default function Meal({children}) {
    return(
        <div className={styles.mealContainer} >
            <div className={styles.draggablePattern}>⠀</div>
            <p className={styles.mealName}>{children}</p>
            <button>🎲</button>
        </div>
    );
}