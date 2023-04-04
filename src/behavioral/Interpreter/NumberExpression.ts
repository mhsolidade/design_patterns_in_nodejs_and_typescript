import AbstractExpression from "./AbstractExpression";
import Context from "./Context";

export default class NumberExpression implements AbstractExpression {
  number: number;
  constructor(number: number) {
    this.number = number;
  }
  interpret(context: Context): void {
    context.push(this.number);
  }
}
