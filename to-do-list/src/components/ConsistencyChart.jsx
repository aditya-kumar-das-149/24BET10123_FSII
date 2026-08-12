import React from 'react';

const ConsistencyChart = ({ todos }) => {
  const completedTasks = todos.filter(todo => todo.completed).length;
  const totalTasks = todos.length;
  const remainingTasks = totalTasks - completedTasks;
  const completionPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="consistency-chart">
      <h2>📊 Task Completion Consistency</h2>
      <div className="chart-stats space-y-3 mt-6">
        <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
          <span className="font-semibold">Total Tasks:</span>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalTasks}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
          <span className="font-semibold">✓ Completed:</span>
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">{completedTasks}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
          <span className="font-semibold">⏳ Remaining:</span>
          <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{remainingTasks}</span>
        </div>
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Completion Rate:</span>
            <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{completionPercentage}%</span>
          </div>
          <div className="progress-bar">
            <div style={{ width: `${completionPercentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsistencyChart;