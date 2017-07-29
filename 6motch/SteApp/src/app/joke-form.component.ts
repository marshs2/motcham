import { Component, Output, EventEmitter } from '@angular/core';

import { Joke } from './shared/joke.model'

@Component({
    selector: 'joke-form',
    template: `
    <div class="card card-block">
        <h2>Create a new Joke </h2>
        <input type="text" placeholder="Enter Setup" #setup/><br>
        <input type="text" placeholder="Enter Punchline" #punchline/><br>
        <button class="btn btn-primary" (click)="createJoke(setup.value, punchline.value)">Create!!</button>
    </div>
    `
})

export class JokeFormComponent {
    @Output() jokeCreate = new EventEmitter();

    createJoke(setup, punchline) {
        let obj = {
            'setup': setup,
            'punchline': punchline
        }
        this.jokeCreate.emit(new Joke(setup, punchline));
    }
}