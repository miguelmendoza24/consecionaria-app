export class User {
  public readonly id?: string;
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly age: number,
    id?: string,
  ) {
    if (id) this.id = id;
  }
}