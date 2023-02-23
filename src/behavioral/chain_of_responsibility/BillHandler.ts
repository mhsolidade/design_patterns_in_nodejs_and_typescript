import Handeler from "./Handler";
export default class BillHandler implements Handeler {
  constructor(
    readonly nextHandler: Handeler | undefined,
    readonly type: number
  ) {}
  handle(bills: any[], amount: number): void {
    const quantity = Math.floor(amount / this.type);
    bills.push({ type: this.type, quantity });
    const remaining = amount % this.type;
    if (this.nextHandler) {
      return this.nextHandler.handle(bills, remaining);
    }
    if (remaining > 0) throw new Error("Sem notas disponíveis");
  }
}
