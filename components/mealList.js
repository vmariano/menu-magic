import Meal from "./meal";
import styles from '../styles/components/mealList.module.css'

const randomizeMenu = (list) => {
    let sampleList = [];
    let daysOfTheWeek = 5;
    for (let i = 0; i < daysOfTheWeek; i++) {
        sampleList.push(list[Math.floor(Math.random() * list.length)]);
    }
    return sampleList.map((meal) => {
        return (<Meal key={meal.id} list={list}>{meal.content}</Meal>);
    });
}

export default function mealList({title, list}) {
    return (
        <div className={styles.mealList}>
            <h1>{title}</h1>
            {randomizeMenu(list)}
        </div>
    );
}