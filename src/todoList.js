import React from "react";

function TodoList({ todos, removeTodo, completedTodo }) {
  function handleCompletedTask(e) {
    completedTodo(e.target.dataset.id);
  }

  function handleRemoveTask(e) {
    removeTodo(e.target.dataset.id);
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <div
            className={`todo-item ${todo.completed ? "task-completed" : ""}`}
            key={todo.id}
          >
            <div className="checkbox">
              <input
                type="checkbox"
                data-id={todo.id}
                defaultChecked={todo.completed}
                onChange={handleCompletedTask}
              />
              <label></label>
            </div>
            <span className="task-text">{todo.task}</span>
            <div
              className="task-remove"
              data-id={todo.id}
              onClick={handleRemoveTask}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
