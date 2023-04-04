import CalculatorParser from "../../../src/behavioral/Interpreter/CalculatorParser";

test("Reverse Polish notation: Should add two numbers", function () {
  const calculator = new CalculatorParser("1 3 +");
  const result = calculator.evaluate();
  expect(result).toEqual(4);
});

test("Reverse Polish notation: Should subtract two numbers", function () {
  const calculator = new CalculatorParser("1 3 -");
  const result = calculator.evaluate();
  expect(result).toEqual(-2);
});

test("Reverse Polish notation: Should multiply two numbers", function () {
  const calculator = new CalculatorParser("4 3 *");
  const result = calculator.evaluate();
  expect(result).toEqual(12);
});

test("Reverse Polish notation: Should solve an operation", function () {
  const calculator = new CalculatorParser("3 4 + 2 * 1 +");
  const result = calculator.evaluate();
  expect(result).toEqual(15);
});
