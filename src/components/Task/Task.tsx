"use client";

import { useState } from "react";
import useList from "@/hooks/useList";
import styles from "./Task.module.css";
import { Task } from "@/contexts/ListContext";

export default function TaskComponent({ id, name, status, editable }: Task) {
  const { handleChangeTask, handleEditButtonTask } = useList();
  const [selectedTask, setSelectedask] = useState<Task>({
    id,
    name,
    editable,
    status,
  });

  return (
    <div className={styles.taskContainer}>
      {editable && !status ? (
        <div>
          <input
            type="text"
            autoFocus
            value={selectedTask.name}
            onChange={(event) =>
              setSelectedask({ ...selectedTask, name: event.target.value })
            }
            className={styles.inputTask}
          />
          <button
            type="button"
            onClick={() => {
              handleChangeTask(selectedTask);
            }}
            className={`${styles.btn} ${styles.btnSave}`}
          >
            save
          </button>
          <button
            type="button"
            onClick={() => {
              handleEditButtonTask(selectedTask.id);
              selectedTask.name = name;
            }}
            className={`${styles.btn} ${styles.btnCancel}`}
          >
            cancel
          </button>
        </div>
      ) : (
        <label>{name}</label>
      )}
    </div>
  );
}
