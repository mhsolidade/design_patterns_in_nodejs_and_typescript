import Person from "../../../src/behavioral/memento/Person";
import PersonHistory from "../../../src/behavioral/memento/PersonHistory";
import PersonMomento from "../../../src/behavioral/memento/PersonMomento";

test("should get the change history.", function () {
  const person = new Person("Matheus", "11986668823");
  const personHistory = new PersonHistory();
  personHistory.addMomento(new PersonMomento(person.getState()));
  person.name = "Matheus Solidade";
  personHistory.addMomento(new PersonMomento(person.getState()));
  person.restoreState(personHistory.getMomento(0).state);
  expect(person.name).toEqual("Matheus");
});
