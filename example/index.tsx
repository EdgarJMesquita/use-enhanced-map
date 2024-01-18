import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useEnhancedMap } from 'use-enhanced-map';

// Define the Todo type
type Todo = {
  description: string;
  done: boolean;
};

// React Component
const App: React.FC = () => {
  // Use the useEnhancedMap hook to manage a map of tasks
  const enhancedMap = useEnhancedMap<string, Todo>();

  // Add some initial tasks when the component loads
  React.useEffect(() => {
    enhancedMap.setMany([
      ['task1', { description: 'Complete assignment', done: false }],
      ['task2', { description: 'Prepare presentation', done: true }],
      ['task3', { description: 'Read a book', done: false }],
    ]);
  }, [enhancedMap]);

  // Function to mark a task as done
  const handleMarkAsDone = (key: string) => {
    enhancedMap.update(key, { done: true });
  };

  // Function to add a new task
  const handleAddTask = () => {
    const newTask: Todo = { description: 'New Task', done: false };
    enhancedMap.add(newTask);
  };

  // Function to delete a task
  const handleDeleteTask = (key: string) => {
    enhancedMap.delete(key);
  };

  // Function to clear all tasks
  const handleClearTasks = () => {
    enhancedMap.clear();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {enhancedMap.mapEntries((key, task) => (
          <li key={key}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleMarkAsDone(key)}
            />
            <span>{task.description}</span>
            <button onClick={() => handleDeleteTask(key)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleClearTasks}>Clear All Tasks</button>
      <p>Total Tasks: {enhancedMap.size}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
