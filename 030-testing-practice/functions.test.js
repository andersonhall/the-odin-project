const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  arrayAnalysis,
} = require('./functions');

// Capitalize
test('first character is uppercase', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('ONLY first character is uppercase', () => {
  expect(capitalize('hELLo')).toBe('Hello');
});

// Reverse String
test('string is reversed', () => {
  expect(reverseString('olleh')).toBe('hello');
});

// Calculator
test('can add using two numbers', () => {
  expect(calculator('add', 2, 3)).toBe(5);
});

test('can subtract using two numbers', () => {
  expect(calculator('subtract', 10, 4)).toBe(6);
});

test('can add using more than two numbers', () => {
  expect(calculator('add', 3, 4, 5, 8)).toBe(20);
});

test('can subtract using more than two numbers', () => {
  expect(calculator('subtract', 10, 4, 2)).toBe(4);
});

test('can multiply two numbers', () => {
  expect(calculator('multiply', 3, 4)).toBe(12);
});

test('can multiply more than two numbers', () => {
  expect(calculator('multiply', 3, 4, 2, -1)).toBe(-24);
});

test('can divide using two numbers', () => {
  expect(calculator('divide', 28, 7)).toBe(4);
});

test('display message if divide by zero error', () => {
  expect(calculator('divide', 5, 0)).toBe('seriously?');
});

// Caesar Cipher
test('shifts all letters forward with a shift of 1', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('ignores spaces', () => {
  expect(caesarCipher('x y z', 4)).toBe('b c d');
});

test('preserves case', () => {
  expect(caesarCipher('TeSTing', 1)).toBe('UfTUjoh');
});

// Array analyzer
test('[0,1,2,3,4] to be', () => {
  const expected = {
    average: 2,
    min: 0,
    max: 4,
    length: 5,
  };
  const data = [0, 1, 2, 3, 4];
  expect(arrayAnalysis(data)).toEqual(expected);
});

test('[] to be', () => {
  const data = [];
  expect(arrayAnalysis(data)).toBeNull();
});

test('[1, 100, 1000, 10000] to be', () => {
  const expected = {
    average: 2775.25,
    min: 1,
    max: 10000,
    length: 4,
  };
  const data = [1, 100, 1000, 10000];
  expect(arrayAnalysis(data)).toEqual(expected);
});
