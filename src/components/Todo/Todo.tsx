import React from "react";
import { useTodo } from "../../context/TodoContext";

export default function Todo() {
  const { taskData } = useTodo();
  return <div>{taskData.length}</div>;
}
