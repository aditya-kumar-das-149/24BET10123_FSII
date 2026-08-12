import React from 'react';

const DeleteTask = ({ task, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter(todo => todo.id !== task.id));
  };

  return (
    <button onClick={handleDelete} className="delete-task-button">
      Delete
    </button>
  );
};

export default DeleteTask;