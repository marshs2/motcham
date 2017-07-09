import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Joke } from './shared/joke.model'

@Component({
  selector: 'joke',
  template: `
    <div class="card card-block">
      <h1 class="card-title">{{joke.setup}}</h1>
      <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
      <button class="btn btn-primary" (click)="joke.toggle()">Tell me!</button>
      <button class="btn btn-secondary" (click)="this.deleteMe.emit()">Delete!</button>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class JokeComponent {
  @Input() joke: Joke;
  @Output() deleteMe = new EventEmitter();

  constructor() {
  }

}