import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./components/todo-list-component/TodoList";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>My Todos</h1>
      <div className="addTodo">
        <form action="http://localhost:4000/tasks" method="POST">
          <input type="text" name="todo" required />
          <input className="button" type="submit" value="Add" />
        </form>
      </div>
      <TodoList />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
