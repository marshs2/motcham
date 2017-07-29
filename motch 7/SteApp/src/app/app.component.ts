import { Component, Input, Output, SimpleChanges, EventEmitter, OnChanges, OnInit, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, OnDestroy } from '@angular/core';

import { Joke } from './shared/joke.model'

@Component({
  selector: 'joke',
  template: `
    <div class="card card-block">
      <ng-content select=".question"></ng-content>
      <h1 class="card-title">{{joke.setup}}</h1>
      <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
      <button class="btn btn-primary" (click)="joke.toggle()">Tell me!</button>
      <button class="btn btn-secondary" (click)="this.deleteMe.emit()">Delete!</button>
      <ng-content select=".answer"></ng-content>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class JokeComponent implements OnChanges, OnInit, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, OnDestroy {
  @Input() joke: Joke;
  @Output() deleteMe = new EventEmitter();

  constructor() {
    console.log(`Constructor is ${this.joke}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`Change is ${this.joke.setup}`);
    for (let key in changes) {
      console.log(`
        Key ${key} changed
        Current Changes: ${changes[key].currentValue.setup}
        Previous Changes: ${changes[key].previousValue}
        is First Change: ${changes[key].isFirstChange}
      `);
    }
  }

  ngOnInit() {
    console.log(`Init is ${this.joke.setup}`);
  }

  ngDoCheck() {
    console.log(`Do Check`);
  }

  ngAfterViewChecked() {
    console.log(`AfterViewChecked`);
  }

  ngAfterViewInit() {
    console.log(`AfterViewInit`);
  }

  ngAfterContentChecked() {
    console.log(`AfterContentChecked`);
  }

  ngAfterContentInit() {
    console.log(`AfterContentInit`);
  }

  ngOnDestroy() {
    console.log(`OnDestroy`);
  }

}