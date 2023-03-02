"use client";

import useList from "@/hooks/useList";
import styles from "./page.module.css";
import { Inter } from "@next/font/google";
import { Task } from "@/contexts/ListContext";
import { useCallback, useState } from "react";
import TaskComponent from "@/components/Task/Task";
import MenuItem from "@/components/MenuItem/MenuItem";

const inter = Inter({ subsets: ["latin"] });

export default function Project() {
  const { list, setList, handleCheckTask } = useList();
  const [taskName, setTaskName] = useState("");

  const addTask = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      let newTask: Task = {
        id: list.length + 1,
        name: taskName,
        status: false,
        editable: false,
      };

      setList([...list, newTask]);
      setTaskName("");
    },
    [list, setList, taskName],
  );

  return (
    <main className={styles.main}>
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

      <div className={styles.taskListContainer}>
        <h1>My Tasks</h1>
        {list.length > 0 ? (
          <ul className={styles.taskList}>
            {list.map((item) => (
              <li
                key={item.id}
                className={`${styles.taskItem} ${
                  item.status ? styles.taskCompleted : ""
                }`}
              >
                <input
                  type="checkbox"
                  onClick={() => handleCheckTask(item.id)}
                  className={styles.checkButton}
                />
                <TaskComponent
                  id={item.id}
                  name={item.name}
                  status={item.status}
                  editable={item.editable}
                />
                <MenuItem taskId={item.id} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.listEmpty}>Empty list...</p>
        )}
      </div>
    </main>
  );
}
