import useList from "@/hooks/useList";
import { Task } from "@/interfaces/Task";
import styles from "./AddTaskForm.module.css";
import { useCallback, useId, useState } from "react";

export default function AddTaskForm() {
  const [taskName, setTaskName] = useState("");
  const { list, setList } = useList();
  const id = useId();

  const addTask = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      let newTask: Task = {
        id: id,
        name: taskName,
        status: false,
        editable: false,
      };

      setList([...list, newTask]);
      setTaskName("");
    },
    [id, list, setList, taskName],
  );

  return (
    <form onSubmit={addTask} className={styles.taskForm}>
      <input
        id="task"
        type="text"
        name="task"
        required
        placeholder="Add a new task"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        className={styles.inputTask}
      />
      <button type="submit" className={styles.addTaskButton}>
        Add
      </button>
    </form>
  );
}
