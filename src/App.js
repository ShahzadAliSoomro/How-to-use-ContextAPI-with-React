import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./component/Addtodo";
import TodoList from "./component/todoList";
import TodoContextWrapper from "./context/TodoContext";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white ">
      <div className=" flex flex-col justify-center w-[500px]  border border-black bg-gray-100">
        <TodoContextWrapper>
          <AddTodo />
          <TodoList />
        </TodoContextWrapper>
      </div>
    </div>
  );
}

export default App;
