import PersonMomento from "./PersonMomento";

export default class PersonHistory {
  private momentos: PersonMomento[] = [];

  addMomento(momento: PersonMomento): void {
    this.momentos.push(momento);
  }
  getMomento(index: number): PersonMomento {
    return this.momentos[index];
  }
}
