const StringCalculator = require('./StringCalculator');

test('returns 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
});

test('returns the number for a single number', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
});

test('returns the sum of two numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,5")).toBe(6);
});

test('returns the sum of multiple numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2,3,4")).toBe(10);
});

test('handles new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2,3")).toBe(6);
});

test('supports different delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
});

test('throws an error for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-2,3")).toThrow('negative numbers not allowed -2');
});

test('throws an error listing all negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-2,3,-4")).toThrow('negative numbers not allowed -2,-4');
});