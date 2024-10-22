import { useTodo } from "../../context/TodoContext";
import tabsData from "../../data/tabsData.json";

export default function Tabs() {
  const { taskData } = useTodo();

  return (
    <div>
      {tabsData.map(({ id, button }) => {
        const numberOfTasks =
          button === "All"
            ? taskData.length
            : button === "Open"
            ? taskData.filter((task) => !task.completed).length
            : taskData.filter((task) => task.completed).length;

        return (
          <button key={id}>
            <h4>{button}</h4>
            <span>{numberOfTasks}</span>
          </button>
        );
      })}
    </div>
  );
}
