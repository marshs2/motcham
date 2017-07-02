export class Joke{
	setup: String;
	punchline: String;
	hide: Boolean;

	constructor(setup: String, punchline: String){
		this.setup = setup;
		this.punchline = punchline;
		this.hide = true;
	};

	toggle(){
		this.hide = !this.hide;
		console.log("In data model",this.setup);
	}
}