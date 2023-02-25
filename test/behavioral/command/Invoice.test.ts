import Account from "../../../src/behavioral/command/Account";
import CreditCommand from "../../../src/behavioral/command/CreditCommand";
import DebitCommand from "../../../src/behavioral/command/DebitCommand";

test("You should create an account", function () {
  const account = new Account("0258235");
  expect(account.balance).toBe(0);
});

test("You should credit an account", function () {
  const account = new Account("0258235");
  account.credit(100);
  expect(account.balance).toBe(100);
});

test("You should debit an account", function () {
  const account = new Account("0258235");
  account.credit(100);
  account.debit(50);
  expect(account.balance).toBe(50);
});

test("You should credit an account using an Command", function () {
  const account = new Account("0258235");
  const creditCommand = new CreditCommand(account, 100);
  creditCommand.execute();
  expect(account.balance).toBe(100);
});

test("You should debit an account using an Command", function () {
  const account = new Account("0258235");
  const creditCommand = new CreditCommand(account, 100);
  creditCommand.execute();
  const debitCommand = new DebitCommand(account, 100);
  debitCommand.execute();
  expect(account.balance).toBe(0);
});
