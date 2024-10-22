import { createContext, useContext } from "react";
import taskData from "../data/taskData";

const Todo = createContext();

export const TodoContext = ({ children }) => {
  return (
    <Todo.Provider
      value={{
        taskData,
      }}
    >
      {children}
    </Todo.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(Todo);
  if (!context) {
    throw new Error("useTodo must be used within an TodoProvider");
  }
  return context;
};
