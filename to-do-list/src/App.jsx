import AddTask from './components/AddTask';
import DeleteTask from './components/DeleteTask';
import TaskItem from './components/TaskItem';
import ThemeToggle from './components/ThemeToggle';
import FocusMode from './components/FocusMode';
import Stopwatch from './components/Stopwatch';
import MotivationQuote from './components/MotivationQuote';
import CompletionSound from './components/CompletionSound';
import CompletionShowcase from './components/CompletionShowcase';
import CalendarView from './components/CalendarView';
import ConsistencyChart from './components/ConsistencyChart';
import { useState, useEffect } from 'react';
import './styles/global.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [task, setTask] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Updated todos:", todos);
  }, [todos]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
      <header>
        <div className="flex justify-between items-center max-w-3xl mx-auto">
          <h1>✓ To-Do List</h1>
          <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
        </div>
      </header>
      <div className="Todo-box">
        <div className="todo-add-sec">
          <h2>Add Task</h2>
          <AddTask todos={todos} setTodos={setTodos} task={task} setTask={setTask} />
        </div>
        <div className="todo-task-display">
          <ol>
            {todos.map((todo) => (
              <TaskItem key={todo.id} task={todo} todos={todos} setTodos={setTodos} />
            ))}
          </ol>
        </div>
        <CompletionShowcase todos={todos} />
        <CalendarView todos={todos} />
        <ConsistencyChart todos={todos} />
        <MotivationQuote />
        <FocusMode />
        <Stopwatch />
        <CompletionSound />
      </div>
    </div>
  );
}

export default App;