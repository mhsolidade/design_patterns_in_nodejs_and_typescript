import Handeler from "./Handler";
export default class Atm {
  constructor(readonly handler: Handeler) {}

  withdraw(amount: number) {
    const bills: any[] = [];
    this.handler.handle(bills, amount);
    return bills;
  }
}
