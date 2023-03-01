"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Inter } from "@next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

interface ListItem {
  id: number;
  name: string;
  status: boolean;
}

export default function Project() {
  const [list, setList] = useState(new Array<ListItem>());
  const [taskName, setTaskName] = useState("");

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newTask: ListItem = {
      id: list.length + 1,
      name: taskName,
      status: false,
    };

    setList([...list, newTask]);
    setTaskName("");
  };

  const handleCheckItem = (itemId: number) => {
    let cloneList = structuredClone(list);
    let [selectedItem] = cloneList.filter((item) => item.id === itemId);
    selectedItem.status = !selectedItem.status;
    setList(cloneList);
  };

  const handleRemoveItem = (itemId: number) => {
    setList(list.filter((item) => item.id !== itemId));
  };

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
                  onClick={() => handleCheckItem(item.id)}
                  className={styles.checkButton}
                />
                <span>{item.name}</span>
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
