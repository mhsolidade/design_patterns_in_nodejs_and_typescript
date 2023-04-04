import AbstractExpression from "./AbstractExpression";
import Context from "./Context";
import MinusExpression from "./MinusExpression";
import MultiplyExpression from "./MultiplyExpression";
import NumberExpression from "./NumberExpression";
import PlusExpression from "./PlusExpression";

// Reverse Polish notation
export default class CalculatorParser {
  tree: AbstractExpression[];

  constructor(input: string) {
    this.tree = [];

    for (const token of input.split(/\s/)) {
      if (token === "+") {
        this.tree.push(new PlusExpression());
        continue;
      }
      if (token === "-") {
        this.tree.push(new MinusExpression());
        continue;
      }
      if (token === "*") {
        this.tree.push(new MultiplyExpression());
        continue;
      }
      this.tree.push(new NumberExpression(Number(token)));
    }
  }

  evaluate() {
    const context = new Context();
    for (const express of this.tree) {
      express.interpret(context);
    }
    return context.pop();
  }
}
