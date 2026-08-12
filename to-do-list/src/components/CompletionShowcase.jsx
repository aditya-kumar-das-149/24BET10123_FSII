import React from 'react';

const CompletionShowcase = ({ todos }) => {
  const completedTasks = todos.filter(todo => todo.completed);
  
  return (
    <div className="completion-showcase">
      <h2>✓ Completed Tasks <span className="text-sm text-green-600 dark:text-green-400">({completedTasks.length}/{todos.length})</span></h2>
      {completedTasks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 italic py-4">No tasks completed yet! 🚀</p>
      ) : (
        <ul className="space-y-2">
          {completedTasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-green-500">
              <span className="text-green-600 dark:text-green-400">✓</span>
              <span className="line-through text-gray-600 dark:text-gray-400">{task.task}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletionShowcase;