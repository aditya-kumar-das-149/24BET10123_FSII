import React from 'react';

const TaskItem = ({ task, todos, setTodos }) => {
  const handleComplete = () => {
    const updatedTodos = todos.map(todo => 
      todo.id === task.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={handleComplete} className="task-text flex items-center gap-2">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={handleComplete}
          className="w-5 h-5 cursor-pointer rounded"
        />
        <span className="truncate">{task.task}</span>
      </span>
      <button 
        onClick={() => setTodos(todos.filter(todo => todo.id !== task.id))} 
        className="btn-danger ml-3 whitespace-nowrap"
      >
        ✕ Delete
      </button>
    </div>
  );
};

export default TaskItem;