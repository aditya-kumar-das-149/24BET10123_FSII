import React from 'react';
import { useState } from 'react';

const CalendarView = ({ todos }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const formatDateToString = (date) => {
    return date.toISOString().split('T')[0];
  };

  const getTasksForSelectedDate = () => {
    return todos.filter(todo => {
      const taskDate = todo.date ? formatDateToString(new Date(todo.date)) : formatDateToString(new Date());
      return taskDate === selectedDate;
    });
  };

  const tasksForDate = getTasksForSelectedDate();

  return (
    <div className="calendar-view">
      <h2>📅 Calendar View</h2>
      <input 
        type="date" 
        className="input-field" 
        value={selectedDate} 
        onChange={handleDateChange} 
      />
      {tasksForDate.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 italic py-4">No tasks for this date</p>
      ) : (
        <ul className="space-y-2 mt-4">
          {tasksForDate.map(todo => (
            <li key={todo.id} className="p-3 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2">
                <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.task}</span>
                <span className={`text-xs px-2 py-1 rounded ${todo.completed ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'}`}>
                  {todo.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarView;