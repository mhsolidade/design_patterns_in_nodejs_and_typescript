import Interator from "./Interator";
export default class NumberInterator implements Interator {
  private position: number = 0;
  constructor(private collection: number[] = []) {}

  next(): number {
    let result = this.collection[this.position];
    this.position += 1;
    return result;
  }

  hasNext(): boolean {
    return this.position < this.collection.length;
  }
}
