import { EnhancedMap } from '../src/EnhancedMap';

describe('it', () => {
  it('map size be zero', () => {
    const map = new EnhancedMap<number, string>();
    expect(map.size).toBe(0);
  });
  it('map should set and get correctly', () => {
    const map = new EnhancedMap<number, string>();
    map.set(1, 'Hello');

    expect(map.get(1)).toBe('Hello');
  });
});
