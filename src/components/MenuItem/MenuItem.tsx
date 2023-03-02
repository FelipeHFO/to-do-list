"use client";

import Image from "next/image";
import styles from "./MenuItem.module.css";
import { ListItem } from "@/app/project/page";
import { Dispatch, SetStateAction, useState } from "react";

interface MenuItemProps {
  taskId: number;
  list: Array<ListItem>;
  setList: Dispatch<SetStateAction<ListItem[]>>;
}

export default function MenuItem({ taskId, list, setList }: MenuItemProps) {
  const [visible, setVisible] = useState(false);

  const handleRemoveItem = () => {
    setList(list.filter((item) => item.id !== taskId));
  };

  return (
    <button
      type="button"
      onClick={() => setVisible((prevState) => !prevState)}
      className={styles.menuItem}
    >
      <Image
        src={"/ellipsis-solid.svg"}
        alt="Ícone de 3 pontos, menu de opções"
        width={20}
        height={20}
      />
      {visible ? (
        <div className={styles.optionsContainer}>
          <button type="button">Edit</button>
          <button type="button" onClick={handleRemoveItem}>
            Remove
          </button>
        </div>
      ) : null}
    </button>
  );
}
