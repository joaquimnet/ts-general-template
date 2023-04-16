export const calc = (a: number, b: number): number => a * b;

export const sayHello = (name: string): string => `Hello ${name}`;

if (typeof calc === 'function') {
  console.log('calc is a function');
}

console.log(sayHello('TypeScript!'));
