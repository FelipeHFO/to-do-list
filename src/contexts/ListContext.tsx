"use client";

import {
  Dispatch,
  useState,
  createContext,
  HTMLAttributes,
  SetStateAction,
  DetailedHTMLProps,
} from "react";
import { Task } from "@/interfaces/Task";

interface ListContextProps {
  list: Array<Task>;
  handleChangeTask(task: Task): void;
  handleCheckTask: (taskId: number) => void;
  handleRemoveTask: (taskId: number) => void;
  handleEditButtonTask: (taskId: number) => void;
  setList: Dispatch<SetStateAction<Task[]>>;
}

export const ListContext = createContext({} as ListContextProps);

export default function ListProvider({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>) {
  const [toDoList, setToDoList] = useState<Array<Task>>([]);

  const handleCheckTask = (taskId: number) => {
    let cloneList = structuredClone(toDoList);
    let [selectedTask] = cloneList.filter((task) => task.id === taskId);
    selectedTask.status = !selectedTask.status;
    setToDoList(cloneList);
  };

  const handleEditButtonTask = (taskId: number) => {
    let cloneList = structuredClone(toDoList);
    let [selectedTask] = cloneList.filter((task) => task.id === taskId);
    selectedTask.editable = !selectedTask.editable;
    setToDoList(cloneList);
  };

  const handleRemoveTask = (taskId: number) => {
    setToDoList(toDoList.filter((task) => task.id !== taskId));
  };

  function handleChangeTask(taskChanged: Task) {
    let cloneList = structuredClone(toDoList);
    let [selectedTask] = cloneList.filter((task) => task.id === taskChanged.id);
    selectedTask.name = taskChanged.name;
    selectedTask.editable = !selectedTask.editable;
    setToDoList(cloneList);
  }

  return (
    <ListContext.Provider
      value={{
        list: toDoList,
        handleCheckTask,
        handleChangeTask,
        handleRemoveTask,
        handleEditButtonTask,
        setList: setToDoList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
