import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JokeComponent} from './app.joke';
import { JokeFormComponent } from './app.jokeForm';
import { JokeListComponent } from './app.jokeList';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    JokeComponent, JokeListComponent, JokeFormComponent
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
