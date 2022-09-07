import "./style.css";
import React, { useState, useEffect } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import { TodoType, DAYS, MONTHS, LOCALSTORAGE_KEY } from "./assets/const";

const App: React.FC = function () {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const storageTodos = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEY) || "{}"
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
    const day = DAYS[now.getDay()];
    const month = MONTHS[now.getMonth()];
    const date = `${day}, ${month} ${now.getDate()}`;
    setDate(date);
  }, []);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleRemoveTodo = (id: string) => {
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
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <div className="todo-date">{date}</div>
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
