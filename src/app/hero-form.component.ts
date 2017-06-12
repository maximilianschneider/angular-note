import { Component } from '@angular/core';
import {Note} from './content/Note';
import {Subject} from './Subject';
import {Category} from './Category';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
})
export class HeroFormComponent {

  Notes = [];
  Subjects = [];
  Categorys = [];
  editmode = false;

  model = new Note(0, 'Titel', 'Notiz...', 0, 'math', 0, 'Benutzername...', 0, 'homework', '06.04.2016', '09.04.2016');

  constructor() {
    this.addSubjects();
    this.addCategorys();
  }

  addSubjects = function () {
    this.Subjects.push(new Subject(89, 'math'));
    this.Subjects.push(new Subject(16, 'german'));
    this.Subjects.push(new Subject(45, 'english'));
    this.Subjects.push(new Subject(89, 'ped'));
    this.Subjects.push(new Subject(89, 'psychology'));
  };

  addCategorys = function () {
    this.Categorys.push(new Category(1, 'homework'));
    this.Categorys.push(new Category(2, 'reminder'));
    this.Categorys.push(new Category(3, 'fastnote'));
  };

  onSubmit() {
    if (this.editmode === true) {
      this.Notes[this.GetIndexOfObjectByID(this.Notes, this.model.ID)] = new Note(this.model.ID, this.model.Title, this.model.Content, this.model.SubjectID, this.model.SubjectName, this.model.UserID, this.model.UserName, this.model.CategoryID, this.model.CategoryName, this.model.DateCreated, this.model.Enddate);
      this.editmode = false;
    } else {
      if (this.model.Enddate === '') {
        this.model.Enddate = 'Keins';
      }
      // this.Notes.push(new Note(0, this.Title, this.Note, 0, 0, this.Category, '2017-05-16', this.Enddate));
      this.Notes.push(new Note(0, this.model.Title, this.model.Content, this.findMyObjectIDByName(this.Subjects, this.model.SubjectName), this.model.SubjectName , 0, 'admin', this.findMyObjectIDByName(this.Categorys, this.model.CategoryName), this.model.CategoryName, '2017-05-18', this.model.Enddate));
      this.model.Content = '';
      this.model.Title = '';
      this.model.CategoryID = 0;
      this.model.Enddate = '';
      this.model.SubjectID = 0;
    }
  }

  findMyObjectByID = function (objArray, id) {
   for (const obj of objArray){
     if (+obj._ID === +id) {
       return obj;
     }
   }
   return 'Keins';
   };

  GetIndexOfObjectByID(box, objectId) {
    const index = box.map(function(e) { return e._id; }).indexOf(objectId);
    return index;
  }

  findMyObjectIDByName (objArray, name) {
    for (const obj of objArray){
      if (+obj._Name === +name) {
        console.log('--------------------');
        console.log(obj._Name + ' | ' + name );
        console.log(obj._ID);
        console.log('--------------------');
        return obj._ID;
      }
    }
    return 'Keins';
  };

  editNote(id) {
    this.model = this.findMyObjectByID(this.Notes, id);
    this.editmode = true;
  }

  newNote() { this.model = new Note(0, 'Titel', 'Notiz...', 0, 'math', 0, 'Benutzername...', 0, 'homework', '06.04.2016', '09.04.2016'); }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.editmode); }
}

// TODO: add edit functionalty
// TODO: autocount id
