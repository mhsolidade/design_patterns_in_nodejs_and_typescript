import CountNumbers from "../../../src/behavioral/Interator/CountNumbers";
import NumberInterator from "../../../src/behavioral/Interator/NumberInterator";

test("Should create and interact with list of numbers", function () {
  const collection = new NumberInterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  expect(collection.next()).toBe(1);
});
test("Should count all numbers of a list", function () {
  const collection = new NumberInterator([1, 1, 3, 3]);
  const counter = new CountNumbers(collection);
  const expectArr: any[] = [
    { qtd: 2, value: 1 },
    { qtd: 2, value: 3 },
  ];
  expect(counter.execute()).toEqual(expectArr);
});
