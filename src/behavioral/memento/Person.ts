import PersonState from "./PersonState";

export default class Person {
  private _name: string;
  private _phone: string;
  private state: PersonState;
  constructor(name: string, phone: string) {
    this._name = name;
    this._phone = phone;
    this.state = new PersonState(name, phone);
  }

  set name(newVlaue: string) {
    this._name = newVlaue;
    this.saveState();
  }
  get name(): string {
    return this._name;
  }
  set phone(newVlaue: string) {
    this._phone = newVlaue;
    this.saveState();
  }
  get phone(): string {
    return this._phone;
  }

  private saveState(): void {
    this.state = new PersonState(this.name, this.phone);
  }

  public getState(): PersonState {
    return this.state;
  }

  public restoreState(state: PersonState): void {
    this._name = state.name;
    this._phone = state.phone;
  }
}
