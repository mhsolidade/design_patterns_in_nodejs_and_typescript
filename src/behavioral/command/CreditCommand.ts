import Command from "./Command";
import Account from "./Account";

export default class CreditCommand implements Command {
  constructor(readonly account: Account, readonly amount: number) {}
  execute(): void {
    this.account.credit(this.amount);
  }
}
