import React from 'react';

function AddTask({ setTodos, todos, task, setTask }) {

  function handleTask() {
    if (task.trim() === '') return;

    const a = todos.reduce((max, todo) => {
      return Math.max(max, todo.id);
    }, 0);

    const newTodo = {
      id: a + 1,
      task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="input-field"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleTask();
          }
        }}
        placeholder="What needs to be done?"
      />

      <button
        onClick={handleTask}
        className="btn-primary"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;