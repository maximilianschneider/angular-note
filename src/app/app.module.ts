import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// TODO: install ng2-ckeditor

