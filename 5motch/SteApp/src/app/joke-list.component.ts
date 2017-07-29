import { Component, ViewEncapsulation } from '@angular/core'

import { Joke } from './shared/joke.model'

@Component({
    selector: 'joke-list',
    template: `
        <h1 class="heading">Ste's Jokes</h1>
        <joke-form (jokeCreate)="addJoke($event)"></joke-form>
        <joke *ngFor="let joke of jokes" [joke]="joke"></joke>
    `,
    styles: [
        `
        .card, .heading {
            width: 500px;
            margin: 20px;
        }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class JokeListComponent {
    jokes: Joke[];
    
    constructor() {
        this.jokes = [
            new Joke('What is the Tamil Cinema Called as?', 'Kollywood'),
            new Joke('Who is the most famous hero of Kollywood?', 'Rajnikanth'),
            new Joke('Who is the best Comedian?', 'Vadivelu')
        ]
    }

    addJoke(event) {
        this.jokes.unshift(event);
    }
}