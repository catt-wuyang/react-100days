import React, { useState, useEffect } from "react";

type inputEvent = React.ChangeEvent<HTMLInputElement>;

function TodoList({ todos, removeTodo, completedTodo, completedAll }) {
  const [allChecked, setAllChecked] = useState(false);
  const [completedNum, setCompletedNum] = useState(0);

  function handleCompletedTask(e: inputEvent) {
    completedTodo(e.target.dataset.id);
  }

  function handleRemoveTask(e: React.MouseEvent) {
    const newId = (e.target as HTMLInputElement).getAttribute("data-id");
    removeTodo(newId);
  }

  function handleAllCompleted(e: inputEvent) {
    setAllChecked(e.target.checked);
    const nextTodos = [...todos];
    nextTodos.forEach((todo) => (todo.completed = e.target.checked));
    completedAll(nextTodos);
  }

  const archive = todos.filter((todo) => todo.completed);

  useEffect(() => {
    setCompletedNum(archive.length);
    // check todos completed set allChecked
    const isAllChecked = archive.length === todos.length ? true : false;
    setAllChecked(isAllChecked);
  }, [todos]);

  return (
    <div className="todo-list">
      <div>
        ✔ completed： {completedNum}/{todos.length}
      </div>
      <div className={`todo-item ${allChecked ? "task-completed" : ""}`}>
        <div className="checkbox">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={handleAllCompleted}
          />
          <label></label>
        </div>
      </div>
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

// TodoList.prototype = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       task: PropTypes.string.isRequired,
//       completed: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
//   removeTodo: PropTypes.func.isRequired,
//   completedTodo: PropTypes.func.isRequired,
//   completedAll: PropTypes.func.isRequired,
// };

export default TodoList;
