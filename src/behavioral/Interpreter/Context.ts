export default class Context {
  tree: number[] = [];

  push(number: number) {
    this.tree.push(number);
  }

  pop(): number | undefined {
    return this.tree.pop();
  }
}
