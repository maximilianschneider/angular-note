/**
 * Created by Niklas on 12.05.2017.
 */
export abstract class Content {

  private _ID;
  private _CategoryID;
  private _CategoryName;
  private _Title;
  private _Content;
  private _SubjectID;
  private _SubjectName;
  private _DateCreated;
  private _UserID;
  private _UserName;

  constructor(id, title, content, subjectID, subjectName, userID, userName, categoryID, categoryName, dateCreated ) {
    this._ID = id;
    this._CategoryID = categoryID;
    this._CategoryName = categoryName;
    this._DateCreated = dateCreated;
    this._Title = title;
    this._Content = content;
    this._SubjectID = subjectID;
    this._SubjectName = subjectName;
    this._UserID = userID;
    this._UserName = userName;
  }

  get ID() {
    return this._ID;
  }

  set ID(value) {
    this._ID = value;
  }

  get CategoryID() {
    return this._CategoryID;
  }

  set CategoryID(value) {
    this._CategoryID = value;
  }

  get CategoryName() {
    return this._CategoryName;
  }

  set CategoryName(value) {
    this._CategoryName = value;
  }

  get Title() {
    return this._Title;
  }

  set Title(value) {
    this._Title = value;
  }

  get Content() {
    return this._Content;
  }

  set Content(value) {
    this._Content = value;
  }

  get SubjectID() {
    return this._SubjectID;
  }

  set SubjectID(value) {
    this._SubjectID = value;
  }

  get SubjectName() {
    return this._SubjectName;
  }

  set SubjectName(value) {
    this._SubjectName = value;
  }

  get DateCreated() {
    return this._DateCreated;
  }

  set DateCreated(value) {
    this._DateCreated = value;
  }

  get UserID() {
    return this._UserID;
  }

  set UserID(value) {
    this._UserID = value;
  }

  get UserName() {
    return this._UserName;
  }

  set UserName(value) {
    this._UserName = value;
  }

}


