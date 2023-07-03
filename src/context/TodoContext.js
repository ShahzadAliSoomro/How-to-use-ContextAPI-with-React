import React, { useState, createContext } from "react";

export const TodoContext = createContext();
const TodoContextWrapper = ({ children }) => {
  const [todos, setTodos] = useState([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextWrapper;