import { Input, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Joke } from './shared/joke.class';

@Component({
	selector: 'joke',
	template: `
		<div class="card card-block">
			<div class="card-title">{{data.setup}}</div>
			<div class="card-text" [hidden]="data.hide">{{data.punchline}}</div>
			<button class="btn btn-primary" (click)="data.toggle()">Tell Me</button>
			<button class="btn btn-danger" (click)="delete()">Delete</button>

		</div>
	`
})
export class JokeComponent{
	@Input('joke') data: Joke;
	@Input('indexed') indexed: Number;
	@Output() deleter = new EventEmitter<Array<any>>();

	delete(){
		this.deleter.emit([this.indexed,"delete"]);
	}
};