/**
 * Created by Niklas on 16.05.2017.
 */
export class Category {
  private _ID;
  private _Name;

  constructor(id, categoryName) {
    this._ID = id;
    this._Name = categoryName;
  }

  get ID() {
    return this._ID;
  }

  set ID(value) {
    this._ID = value;
  }

  get CategoryName() {
    return this._Name;
  }

  set CategoryName(value) {
    this._Name = value;
  }
}
