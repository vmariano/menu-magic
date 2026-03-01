import styles from '../styles/components/meal.module.css'
import {useState} from "react";


export default function Meal({children, list}) {
    const [content, setChildren] = useState(children);
    return(
        <div className={styles.mealContainer} >
            <div className={styles.draggablePattern}>⠀</div>
            <p className={styles.mealName}>{content}</p>
            <button onClick={() =>  {
                let sample = list[Math.floor(Math.random() * list.length)];
                setChildren(sample.content)
            }}>🎲</button>
        </div>
    );
}