import { Component } from '@angular/core';
import { HeaderComponent } from './app.header';

import { Login } from './shared/Login.class';
import { Search } from './shared/Search.class';

@Component ({
	selector: "app-root",
	templateUrl: "app.root.html"
})

export class RootComponent {
	login: Login;
	search: Search;
	loginChanged(login){
		this.login = login;
		console.log("In root module",this.login);
	}

	searchTrigger(search){
		this.search = search;
		console.log("In search", this.search);
	}
};


