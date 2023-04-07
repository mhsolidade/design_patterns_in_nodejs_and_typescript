import Observer from "./Observer";
export default class Subscriber implements Observer {
  public newsletterNotifications: Array<{
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
  }> = [];
  constructor(public name: string, public email: string) {}
  update(
    title: string,
    value: { body: string; createdAt: Date; updatedAt: Date }
  ): void {
    const { body, createdAt, updatedAt } = value;
    this.newsletterNotifications.push({
      title,
      body,
      createdAt,
      updatedAt,
    });
  }
}
