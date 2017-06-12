import {Content} from './Content';
/**
 * Created by Niklas on 15.05.2017.
 */
export class Note extends Content {
  private _Enddate;

  constructor(id, title, content, subjectID, subjectName, userID, userName, categoryID, categoryName, dateCreated, enddate) {
    super(id, title, content, subjectID, subjectName, userID, userName, categoryID, categoryName, dateCreated);
    this._Enddate = enddate;
  }

  get Enddate() {
    return this._Enddate;
  }

  set Enddate(value) {
    this._Enddate = value;
  }


}
