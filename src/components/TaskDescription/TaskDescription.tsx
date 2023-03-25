"use client";

import { useState } from "react";
import useList from "@/hooks/useList";
import { Task } from "@/interfaces/Task";
import styles from "./TaskDescription.module.css";

export default function TaskDescription({ id, name, status, editable }: Task) {
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
