import { Component } from '@angular/core';

@Component({
	selector: 'joke',
	template: `
	<h1> {{setup}}</h1>
	<h1><p>{{punchLine}}</p></h1>
	`
})
export class JokeComponent{
	setup: String;
	punchLine: String;

	constructor(){
		this.setup = "what did cheese say when it looked in the mirror? ";
		this.punchLine = "Halloumi(hello me)";
	}
};