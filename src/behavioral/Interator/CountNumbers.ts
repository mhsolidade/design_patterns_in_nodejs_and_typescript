import Interator from "./Interator";

export default class CountNumbers {
  result: { value: number; qtd: number }[];
  constructor(readonly collection: Interator) {
    this.result = [];
  }

  execute() {
    while (this.collection.hasNext()) {
      const element = this.collection.next();
      const elementFund = this.result.find((item) => item.value === element);
      if (elementFund) {
        elementFund.qtd++;
      } else {
        this.result.push({ value: element, qtd: 1 });
      }
    }
    return this.result;
  }
}
