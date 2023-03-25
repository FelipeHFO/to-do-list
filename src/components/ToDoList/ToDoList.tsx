import useList from "@/hooks/useList";
import TaskComponent from "../Task/Task";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const { list } = useList();

  return (
    <div className={styles.taskListContainer}>
      <h1>My Tasks</h1>
      {list?.length > 0 ? (
        <ul className={styles.taskList}>
          {list.map((item) => (
            <TaskComponent
              key={item.id}
              id={item.id}
              name={item.name}
              status={item.status}
              editable={item.editable}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.listEmpty}>Empty list...</p>
      )}
    </div>
  );
}
