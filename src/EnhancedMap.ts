class EnhancedMap<K = unknown, V = unknown> extends Map<K, V> {
  public mapEntries<T>(callback?: (key: K, value: V, index: number) => T) {
    return Array.from(this.entries()).map<T>(
      ([key, value], index) =>
        callback?.(key, value, index) || (([key, value] as unknown) as T)
    );
  }

  public mapKeys<T = K>(callback?: (key: K, index: number) => T) {
    return Array.from(this.keys()).map<T>(
      (key, index) => callback?.(key, index) || ((key as unknown) as T)
    );
  }

  public mapValues<T = V>(callback?: (value: V, index: number) => T) {
    return Array.from(this.values()).map(
      (value, index) => callback?.(value, index) || ((value as unknown) as T)
    );
  }

  public toArray() {
    return Array.from(this.entries());
  }

  public update(key: K, newValue: Partial<V> | V): this {
    if (!this.has(key)) {
      return this;
    }

    const value = this.get(key);

    if (Array.isArray(value)) {
      const updated = [...value, newValue];
      this.set(key, (updated as unknown) as V);
      return this;
    }

    if (typeof value === 'object') {
      this.set(key, { ...value, ...newValue });
      return this;
    }

    this.set(key, newValue as V);
    return this;
  }

  public setMany(array: Array<[K, V]>) {
    array.forEach(([k, v]) => this.set(k, v));
    return this.size;
  }
}

export { EnhancedMap };
