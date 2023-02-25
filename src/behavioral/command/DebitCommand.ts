import Command from "./Command";
import Account from "./Account";

export default class DebitCommand implements Command {
  constructor(readonly account: Account, readonly amount: number) {}
  execute(): void {
    this.account.debit(this.amount);
  }
}
