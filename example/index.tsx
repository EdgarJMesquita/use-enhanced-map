import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useEnhancedMap } from '../src/useEnhancedMap';

type Todo = {
  id: number;
  description: string;
  done: boolean;
};

const App = () => {
  const map = useEnhancedMap<string, Todo>();

  return (
    <div>
      {map.mapValues(it => {
        return <h2>{it.description}</h2>;
      })}
      <button
        onClick={() => {
          map.add({ id: Date.now(), description: 'TESTE', done: true });
        }}
      ></button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
