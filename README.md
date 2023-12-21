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
import { useEnhancedMap } from 'enhanced-map';

const MyComponent = () => {
  const enhancedMap = useEnhancedMap<string, string>();

  const handleAdd = () => {
    enhancedMap.add('newKey');
  };

  const handleUpdate = () => {
    enhancedMap.update('existingKey', 'updatedValue');
  };

  return (
    <div>
      <ul>
        {enhancedMap.mapValues((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
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
