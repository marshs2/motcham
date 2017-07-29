import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JokeComponent } from './app.component';
import { JokeListComponent } from './joke-list.component';
import { JokeFormComponent } from './joke-form.component';

@NgModule({
  declarations: [
    JokeComponent,
    JokeListComponent,
    JokeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
// by convention?? 'AppModule' Cannot be changed?