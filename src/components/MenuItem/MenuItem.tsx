"use client";

import Image from "next/image";
import { useState } from "react";
import useList from "@/hooks/useList";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  taskId: number;
}

export default function MenuItem({ taskId }: MenuItemProps) {
  const { handleRemoveTask, handleEditButtonTask } = useList();
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.menuItem}>
      <button
        type="button"
        onClick={() => setVisible((prevState) => !prevState)}
        className={styles.btnShowMenu}
      >
        <Image
          src={"/ellipsis-solid.svg"}
          alt="Ícone de 3 pontos, menu de opções"
          width={20}
          height={20}
        />
      </button>
      {visible ? (
        <div className={styles.optionsContainer}>
          <button
            type="button"
            onClick={() => {
              handleEditButtonTask(taskId);
              setVisible(false);
            }}
          >
            Edit
          </button>
          <button type="button" onClick={() => handleRemoveTask(taskId)}>
            Remove
          </button>
        </div>
      ) : null}
    </div>
  );
}
