import {Content} from './Content';
/**
 * Created by Niklas on 15.05.2017.
 */

export class Article extends Content {
  private _Public;

  constructor(id, title, content, subjectID, subjectName, userID, userName, categoryID, categoryName, dateCreated, _public) {
    super(id, title, content, subjectID, subjectName, userID, userName, categoryID, categoryName, dateCreated);
    this._Public = _public;
  }

  get Public() {
    return this._Public;
  }

  set Public(value) {
    this._Public = value;
  }
}
