import { describe, test, expect } from 'vitest';
import { calc, sayHello } from '.';

describe('Example tests', () => {
  test('should calculate', () => {
    expect(calc(3, 5)).toBe(15);
  });
  test('should say hello', () => {
    expect(sayHello('TypeScript!')).toBe('Hello TypeScript!');
  });
});
