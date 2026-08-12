# To-Do List Application

## Overview
This To-Do List application is a feature-rich task management tool built with React. It allows users to add, delete, and manage tasks while providing additional functionalities such as a dark/light mode toggle, focus mode with a timer, motivational quotes, and visualizations of task completion.

## Features
- **Task Management**: Add, delete, and mark tasks as completed.
- **Dark/Light Mode**: Toggle between dark and light themes for better user experience.
- **Focus Mode**: Enter a focus mode with a nature-themed wallpaper and a timer to enhance productivity.
- **Stopwatch**: Track study sessions with a stopwatch feature that includes pause and lap options.
- **Motivational Quotes**: Display motivational quotes to encourage users during their tasks.
- **Completion Sound**: Play a notification sound upon task completion.
- **Completion Showcase**: Visual feedback for completed tasks.
- **Calendar View**: Track daily tasks and their completion status.
- **Consistency Chart**: Visualize task completion consistency using a pie chart.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd to-do-list
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Project Structure
```
to-do-list
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── components
│   │   ├── AddTask.jsx
│   │   ├── DeleteTask.jsx
│   │   ├── TaskItem.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── FocusMode.jsx
│   │   ├── Stopwatch.jsx
│   │   ├── MotivationQuote.jsx
│   │   ├── CompletionSound.jsx
│   │   ├── CompletionShowcase.jsx
│   │   ├── CalendarView.jsx
│   │   └── ConsistencyChart.jsx
│   ├── hooks
│   │   └── useTheme.js
│   ├── data
│   │   └── quotes.js
│   ├── styles
│   │   ├── global.css
│   │   └── theme.css
│   ├── utils
│   │   └── helpers.js
│   └── assets
│       └── sounds
│           └── completion.mp3
├── package.json
├── index.html
├── vite.config.js
└── README.md
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.