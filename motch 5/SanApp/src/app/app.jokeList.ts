import { Component } from '@angular/core';
import { Joke } from './shared/joke.class';
@Component({
	selector: 'joke-list',
	template: `
		<div class="card card-block" *ngFor="let joke of jokes">
			<div class="card-title">{{joke.setup}}</div>
			<div class="card-text" [hidden]="joke.hide">{{joke.punchline}}</div>
			<button class="btn btn-primary" (click)="toggle(joke)">Tell me</button>	
		</div>
	`
})
export class JokeListComponent{
	jokes: Joke[];

	constructor(){
		this.jokes = [
				new Joke("What did the cheese say when it looked in the mirror?", "Hello-me	(Halloumi)"),
	new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-apony(Mascarpone)"),	
	new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
		];
	}

	toggle(joke){
		joke.hide = !joke.hide;	
	}
}