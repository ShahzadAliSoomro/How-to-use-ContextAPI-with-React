import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);
  const [editItem, setEditItem] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const deleteItem = (delItem) => {
    setTodos(todos.filter((item) => item !== delItem));
  };
  
  const updateItem = (editIndex) => {
    setEditIndex(editIndex);
    setEditItem(todos[editIndex]);
  };
  
  const handleUpdate = () => {
    if (editItem.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = editItem;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditItem("");
    }
  }
  console.log(todos);
  return (
    <div className="w-full">
      {todos?.map((todoItem, index) => (
        <div
          key={index}
          className="flex justify-around bg-slate-500 mt-5 border border-white "
        >
          {editIndex === index ? (
            <input
              type="text"
              value={editItem}
              onChange={(e) => setEditItem(e.target.value)} 
              onBlur={handleUpdate}
            />
          ) : (
            <h3 className="text-white w-full">{todoItem}</h3>
          )}
          <div className="flex gap-2">
            <button
              className="bg-green-500 text-white font-semibold px-2"
              onClick={() => updateItem(index)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 font-semibold px-2"
              onClick={() => deleteItem(todoItem)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
