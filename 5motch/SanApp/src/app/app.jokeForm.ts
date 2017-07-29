import { Component } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';

import { Joke } from './shared/joke.class';

@Component({
	selector: 'joke-form',
	template: `
		<div class="card card-block">
			<div class="card-title">Create a Joke</div>

			<div class="form-group">
				<input class="form-control" placeholder="setup" #setup />
			</div>
			<div class="form-group">
				<input class="form-control" placeholder="punchline" #punchline />
			</div>
			<button class="btn btn-primary" (click)="createJoke(setup.value, punchline.value)"> 
				Create 
			</button>
		</div>
	`
})

export class JokeFormComponent{
	@Output() jokeEmitter = new EventEmitter<Joke>();

	createJoke(setup: String, punchline: string){
		this.jokeEmitter.emit(new Joke(setup, punchline));
	}


}