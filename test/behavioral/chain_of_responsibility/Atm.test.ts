import Atm from "../../../src/behavioral/chain_of_responsibility/Atm";
import BillHandler from "../../../src/behavioral/chain_of_responsibility/BillHandler";

test("You should withdraw money with all the bills", function () {
  const handler1 = new BillHandler(undefined, 1);
  const handler2 = new BillHandler(handler1, 2);
  const handler5 = new BillHandler(handler2, 5);
  const handler10 = new BillHandler(handler5, 10);
  const handler20 = new BillHandler(handler10, 20);
  const handler50 = new BillHandler(handler20, 50);
  const handler100 = new BillHandler(handler50, 100);
  const atm = new Atm(handler100);
  const bills = atm.withdraw(978);
  expect(bills).toStrictEqual([
    { type: 100, quantity: 9 },
    { type: 50, quantity: 1 },
    { type: 20, quantity: 1 },
    { type: 10, quantity: 0 },
    { type: 5, quantity: 1 },
    { type: 2, quantity: 1 },
    { type: 1, quantity: 1 },
  ]);
});

test("You should withdraw money only with 1 bills.", function () {
  const handler1 = new BillHandler(undefined, 1);
  const atm = new Atm(handler1);
  const bills = atm.withdraw(978);
  expect(bills).toStrictEqual([{ type: 1, quantity: 978 }]);
});
test("You should withdraw money only with 5 and 10 bills.", function () {
  const handler5 = new BillHandler(undefined, 5);
  const handler10 = new BillHandler(handler5, 10);
  const atm = new Atm(handler10);
  const bills = atm.withdraw(505);
  expect(bills).toStrictEqual([
    { type: 10, quantity: 50 },
    { type: 5, quantity: 1 },
  ]);
});
