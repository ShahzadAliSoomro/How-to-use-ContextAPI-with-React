import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
  const { setTodos, todos } = useContext(TodoContext);
  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, e.target[0].value]);
  }
  return (
    <>
      <div className="w-full  flex justify-center mt-10 ">
        <p className="text-white bg-blue-400 p-2 font-medium w-fit text-center  ">
          Add Your List Here
        </p>
      </div>
      <form className="mt-5 p-2 w-full" onSubmit={addTodo}>
        <input
          type="text"
          name="todo"
      
          placeholder="write text here ..."
          className="w-10/12"
        />
        <button className="bg-blue-400 text-white px-6">Add</button>
      </form>
    </>
  );
}

export default AddTodo;
