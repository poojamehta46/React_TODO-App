import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button
            className="waves-effect waves-light btn-small"
            style={{
              float: "right",
            }}
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Done!
          </button>
        </div>
      );
    })
  ) : (
    <p className="center"> you dont have any task left! Enjoy :) </p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
