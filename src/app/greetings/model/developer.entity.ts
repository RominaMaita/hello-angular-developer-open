export class Developer{

  private _firstName: string;
  private _lastName: string;
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get fullName():string { return `${this._firstName} ${this._lastName}` };



}

