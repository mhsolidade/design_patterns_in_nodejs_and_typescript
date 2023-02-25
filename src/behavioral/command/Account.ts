export default class Account {
  private _blance = 0;
  constructor(readonly id: string) {}

  get balance() {
    return this._blance;
  }
  credit(amount: number) {
    this._blance += amount;
  }
  debit(amount: number) {
    this._blance -= amount;
  }
}
