import Observer from "./Observer";
export default class Observable {
  observers: Observer[] = [];

  regiter(observer: Observer) {
    this.observers.push(observer);
  }

  notifyAll(name: string, value: any) {
    for (const observer of this.observers) {
      observer.update(name, value);
    }
  }
}
