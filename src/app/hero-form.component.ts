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

  /*
  * findMyObjectByID = function (objArray, id) {
   for (const obj of objArray){
   if (+obj._ID === +id) {
   console.log('--------------------');
   console.log(obj._ID + ' | ' + id );
   console.log(obj._Name);
   console.log('--------------------');
   return obj._Name;
   } else {
   console.log('--------------------');
   console.log(obj._ID + ' | ' + id );
   console.log('ELSE');
   console.log('--------------------');
   }
   }
   return 'Keins';
   };
  * */

  findMyObjectIDByName = function (objArray, name) {
    for (const obj of objArray){
      if (+obj._Name === +name) {
        console.log('--------------------');
        console.log(obj._Name + ' | ' + name );
        console.log(obj._ID);
        console.log('--------------------');
        return obj._ID;
      } else {
        console.log('--------------------');
        console.log(obj._Name + ' | ' + name );
        console.log(obj._ID);
        console.log('ELSE');
        console.log('--------------------');
      }
    }
    return 'Keins';
  };

  newHero() { this.model = new Note(0, 'Titel', 'Notiz...', 0, 'math', 0, 'Benutzername...', 0, 'homework', '06.04.2016', '09.04.2016'); }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.Notes); }
}
