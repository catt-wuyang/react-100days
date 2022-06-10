import "./style.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
        if (todo.task.trim()) {
          addTodo({ ...todo, id: uuidv4() });
          setTodo({ ...todo, task: "" });
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [todo]);

  return (
    <div>
      <input
        className="add-input"
        type="text"
        placeholder="+ 添加任务，回车即可保存"
        value={todo.task}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TodoForm;
