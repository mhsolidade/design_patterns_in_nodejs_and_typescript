import Observable from "./Observable";

export default class Newsletter extends Observable {
  private _title: string;
  private _body: string;
  private _createdAt: Date;
  private _updatedAt: Date | null = null;

  constructor(title: string, body: string, createdAt: Date) {
    super();
    this._title = title;
    this._body = body;
    this._createdAt = createdAt;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
    this.setUpdatedAt();
  }

  public get body(): string {
    return this._body;
  }

  public set body(body: string) {
    this._body = body;
    this.setUpdatedAt();
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public set createdAt(createdAt: Date) {
    this._createdAt = createdAt;
    this.setUpdatedAt();
  }

  private setUpdatedAt() {
    this._updatedAt = new Date();
  }

  public save() {
    this.setUpdatedAt();
    this.notifyAll(this.title, {
      body: this.body,
      createdAt: this.createdAt,
      updatedAt: this._updatedAt,
    });
  }
}
