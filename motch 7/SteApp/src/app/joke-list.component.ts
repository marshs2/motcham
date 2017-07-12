import { Component, ViewEncapsulation } from '@angular/core'

import { Joke } from './shared/joke.model'

@Component({
    selector: 'joke-list',
    template: `
        <h1 class="heading">Ste's Jokes</h1>
        <joke-form (jokeCreate)="addJoke($event)"></joke-form>
        <joke *ngFor="let joke of jokes; let i = index" [joke]="joke" (deleteMe)="deleteJoke(i)">
            Question: <p class="question">{{ joke.setup }}</p>
            Answer <p class="answer">{{ joke.punchline }}</p>
        </joke>
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

    doAsyncTask() {
        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                alert('Async Task going to execute');
                reject('errors');
            }, 5000);
        });
        return promise;
    }

    addJoke(event) {
        this.doAsyncTask().then(() => {
            this.jokes.unshift(event);
        }, (err) => {
            throw new Error("Mudiyala pa");
        }).then((val)=> {
            alert('No errors');
        }, (err) => {
             alert(err);
        })
    }

    deleteJoke(index) {
        this.jokes.splice(index, 1);
    }
}