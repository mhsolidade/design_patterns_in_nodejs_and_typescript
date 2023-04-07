export default interface Observer {
  update(name: string, value: any): void;
}
