import { ListContext } from "@/contexts/ListContext";
import { useContext } from "react";

export default function useList() {
  const context = useContext(ListContext);
  return context;
}
