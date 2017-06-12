/**
 * Created by Niklas on 15.05.2017.
 */
export class Dummy {
  private _Firstname;
  private _Lastname;
  private _Category;

  constructor(firstname, lastname, category){
    this._Firstname = firstname;
    this._Lastname = lastname;
    this._Category = category;
  }

  get Firstname() {
    return this._Firstname;
  }

  set Firstname(value) {
    this._Firstname = value;
  }

  get Lastname() {
    return this._Lastname;
  }

  set Lastname(value) {
    this._Lastname = value;
  }

  get Category() {
    return this._Category;
  }

  set Category(value) {
    this._Category = value;
  }
}
