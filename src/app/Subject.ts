/**
 * Created by Niklas on 16.05.2017.
 */

export class Subject {
  private _Name;
  private _ID;

  constructor(id, name) {
    this._ID = id;
    this._Name = name;
  }

  get Name() {
    return this._Name;
  }

  set Name(value) {
    this._Name = value;
  }

  get ID() {
    return this._ID;
  }

  set ID(value) {
    this._ID = value;
  }
}
