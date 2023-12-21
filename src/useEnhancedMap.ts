import { useState } from 'react';
import { EnhancedMap } from './EnhancedMap';

export function useEnhancedMap<K, V>() {
  const [map, setMap] = useState(new EnhancedMap<K, V>());

  function get(k: K) {
    return map.get(k);
  }

  function update(k: K, v: { [P in keyof V]?: unknown }) {
    map.update(k, v);
    setMap(new EnhancedMap(map));
    return map.get(k);
  }

  function set(k: K, v: V) {
    map.set(k, v);
    setMap(new EnhancedMap(map));
    return map.get(k);
  }

  function add(v: V) {
    map.set((map.size as unknown) as K, v);
    return map.get((map.size as unknown) as K);
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
    array.forEach(([k, v]) => map.set(k, v));
    setMap(new EnhancedMap(map));
    return array.length;
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
