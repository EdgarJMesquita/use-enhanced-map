# useEnhancedMap

A custom extension of the JavaScript `Map` class with enhanced functionalities.

## Usage

### Installation

```
npm install use-enhanced-map
or
yarn add use-enhanced-map
```

### Usage Example

#### Usage in React

```ts
import React from 'react';
import { useEnhancedMap } from 'use-enhanced-map';

type Todo = {
  description: string;
  done: boolean;
};

const MyComponent = () => {
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
export default MyComponent;
```

## `EnhancedMap` Class

An extended `Map` class offering additional functionalities.

### Methods

#### `update(key, newValue): this`

Updates the value for a specific key. If the key doesn't exist, it does nothing.

#### `setMany(array): number`

Sets multiple key-value pairs from an array. Returns the new size of the map.

#### `mapEntries(): [any, any][]`

Maps entries in the map. Returns an array of transformed entries.

#### `mapKeys(): any[]`

Maps keys in the map. Returns an array of transformed keys.

#### `mapValues(): any[]`

Maps values in the map. Returns an array of transformed values.

#### `toArray(): [any, any][]`

Converts the map to an array of key-value pairs.

_Note:_ The other methods (`get`, `set`, `delete`, `clear`, `has`, `keys`, `entries`, `forEach`, etc.) are inherited from the native `Map` class and behave as in the standard `Map` implementation.

## `useEnhancedMap` Hook

A React hook for managing an instance of `EnhancedMap`.

### Usage

```ts
const enhancedMap = useEnhancedMap();
```

### Available Functions

#### `update(key, newValue): any | null`

Updates the value for a specific key. Returns the previous value associated with the key, or `null` if the key doesn't exist.

#### `setMany(array): number`

Sets multiple key-value pairs from an array. Returns the new size of the map.

#### `mapEntries(): [any, any][]`

Maps entries in the map. Returns an array of transformed entries.

#### `mapKeys(): any[]`

Maps keys in the map. Returns an array of transformed keys.

#### `mapValues(): any[]`

Maps values in the map. Returns an array of transformed values.

#### `toArray(): [any, any][]`

Converts the map to an array of key-value pairs.

_Note:_ The other functions documented are native `Map` methods provided by the `EnhancedMap` class and return `null` instead of `undefined` for cases where no value is found.
