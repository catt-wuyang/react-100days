import "./style.css";
import React, { useState, useEffect } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { TodoData } from "./types";

const LOCALSTORAGE_KEY = "TODO_LIST";

const App = () => {
  const [todos, setTodos] = useState<Array<TodoData>>([]);
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const storageTodos = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEY) || ""
    );
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = `${day}, ${month} ${now.getDate()}`;

    setDate(date);
  }, []);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleRemoveTodo = (id) => {
    console.log("remove", id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id) => {
    const newTodos = todos
      .map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
      .sort((a, b) => Number(a.completed) - Number(b.completed));

    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="date">{date}</div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={handleRemoveTodo}
        completedTodo={handleCompleteTodo}
      />
    </div>
  );
};

export default App;
