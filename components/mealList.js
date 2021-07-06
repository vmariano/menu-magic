import Meal from "./meal";

export default function mealList({title, list}) {
    return (
        <div>
            <h1>{title}</h1>
            {list.map((meal) => {
                return (<Meal key={meal.id}>{meal.content}</Meal>);
            })}
        </div>
    );
}