import useList from "@/hooks/useList";
import styles from "./Task.module.css";
import { Task } from "@/interfaces/Task";
import MenuItem from "../MenuItem/MenuItem";
import TaskDescription from "../TaskDescription/TaskDescription";

export default function TaskComponent({ id, name, status, editable }: Task) {
  const { handleCheckTask } = useList();

  return (
    <li
      key={id}
      className={`${styles.taskItem} ${status ? styles.taskCompleted : ""}`}
    >
      <input
        type="checkbox"
        onClick={() => handleCheckTask(id)}
        className={styles.checkButton}
      />
      <TaskDescription
        id={id}
        name={name}
        status={status}
        editable={editable}
      />
      <MenuItem taskId={id} />
    </li>
  );
}
