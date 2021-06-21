import { route } from 'dist/cjs/index.js';

describe('depay-dex-routing', () => {
  
  it('should export a "route" function', () => {
    expect(typeof(route)).toBe('function');
  });
});
