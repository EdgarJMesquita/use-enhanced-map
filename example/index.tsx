import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useEnhancedMap } from '../src/useEnhancedMap';

const App = () => {
  const map = useEnhancedMap<string, string>();
  map.mapEntries();
  return (
    <div>
      {map.mapKeys(it => {
        return <h2>{it}</h2>;
      })}
      <button
        onClick={() => {
          map.add('HELLO');
        }}
      ></button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
