import { useState } from 'react';
import { EnhancedMap } from './EnhancedMap';
import { weakUUID } from './utils';

export function useEnhancedMap<K, V>() {
  const [map, setMap] = useState(new EnhancedMap<K, V>());

  function get(k: K) {
    return map.get(k) || null;
  }

  function update(k: K, v: Partial<V>) {
    map.update(k, v);
    setMap(new EnhancedMap(map));
    return map.get(k) || null;
  }

  function set(k: K, v: V) {
    map.set(k, v);
    setMap(new EnhancedMap(map));
    return map.get(k) || null;
  }

  function add(v: V) {
    map.set((weakUUID() as unknown) as K, v);
    return map.get((map.size as unknown) as K) || null;
  }

  function _delete(k: K) {
    const isSuccessful = map.delete(k);
    setMap(new EnhancedMap(map));
    return isSuccessful;
  }

  function clear() {
    map.clear();
    setMap(new EnhancedMap(map));
  }

  function setMany(array: Array<[K, V]>) {
    try {
      array.forEach(([k, v]) => map.set(k, v));
      setMap(new EnhancedMap(map));
      return map.size;
    } catch (error) {
      console.warn(
        'Invalid argument for setMany(array: Array), received ' + typeof array
      );
      return 0;
    }
  }

  function mapValues<T = V>(callback?: (value: V, index: number) => T) {
    return map.mapValues<T>(callback);
  }

  function mapEntries<T = [K, V]>(
    callback?: (key: K, value: V, index: number) => T
  ) {
    return map.mapEntries<T>(callback);
  }

  function mapKeys<T = K>(callback?: (key: K, index: number) => T) {
    return map.mapKeys<T>(callback);
  }

  function entries() {
    return map.entries();
  }

  function keys() {
    return map.keys();
  }

  function has(key: K) {
    return map.has(key);
  }

  function toArray() {
    return map.toArray();
  }

  function forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void) {
    map.forEach(callbackfn);
  }

  return {
    get,
    set,
    update,
    delete: _delete,
    clear,
    has,
    keys,
    entries,
    forEach,
    mapValues,
    mapKeys,
    mapEntries,
    setMany,
    toArray,
    add,
    size: map.size,
  };
}
