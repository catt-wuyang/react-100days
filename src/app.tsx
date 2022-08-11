import "./style.css";
import React, { useState, useEffect } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const LOCALSTORAGE_KEY = "TODO_LIST";

interface TodoType {
  id: string;
  task: string;
  completed: boolean;
}

const App: React.FC = function () {
  const [todos, setTodos] = useState<TodoType[]>([]);
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

  const handleRemoveTodo = (id: string) => {
    console.log("remove", id);
    setTodos(todos.filter((todo: TodoType) => todo.id !== id));
  };

  const handleCompleteTodo = (id: string) => {
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

  const handleCompleteAll = (todos: TodoType[]) => {
    setTodos(todos);
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
        completedAll={handleCompleteAll}
      />
    </div>
  );
};

export default App;
