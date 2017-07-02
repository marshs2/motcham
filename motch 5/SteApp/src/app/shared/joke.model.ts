export class Joke {
    setup: string;
    punchline: string;
    hide: boolean;

    constructor (setup, punchline) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true
    }

    toggle(joke) {
        this.hide = !this.hide;
    }
}