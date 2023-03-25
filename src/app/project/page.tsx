"use client";

import styles from "./page.module.css";
import ToDoList from "@/components/ToDoList/ToDoList";
import AddTaskForm from "@/components/AddTaskForm/AddTaskForm";

export default function Project() {
  return (
    <main className={styles.main}>
      <AddTaskForm />
      <ToDoList />
    </main>
  );
}
