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
      <h1 className={inter.className}>To Do List</h1>

      <form onSubmit={addTask} className={styles.taskForm}>
        <label htmlFor="task" className={styles.labelTask}>
          Nome da Tarefa
        </label>
        <input
          id="task"
          type="text"
          name="task"
          required
          placeholder="Ex.: Estudar NextJS"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          className={styles.inputTask}
        />
        <button type="submit" className={styles.addTaskButton}>
          Adicionar Tarefa
        </button>
      </form>

      {list.length > 0 ? (
        <div className={styles.taskListContainer}>
          <h1>Minha Lista</h1>
          <ul className={styles.taskList}>
            {list.map((item) => (
              <li
                key={item.id}
                className={`${styles.taskItem} ${
                  item.status ? styles.taskCompleted : styles.taskPending
                }`}
              >
                <span>{item.name}</span>
                <div className={styles.buttonsItemContainer}>
                  <button
                    type="button"
                    onClick={() => handleCheckItem(item.id)}
                    className={`${styles.itemButton} ${
                      item.status ? styles.uncheckButton : styles.checkButton
                    }`}
                  >
                    <Image
                      src={`${
                        item.status
                          ? "/circle-xmark-solid.svg"
                          : "/circle-check-solid.svg"
                      }`}
                      alt="Ícone de checado"
                      width={35}
                      height={35}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                    className={`${styles.itemButton} ${styles.removeButton}`}
                  >
                    <Image
                      src={"/trash-solid.svg"}
                      alt="Ícone de checado"
                      width={35}
                      height={35}
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </main>
  );
}
