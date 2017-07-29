import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './app.header';

import { Login } from './shared/Login.class';
import { Search } from './shared/Search.class';
import {NgModule,
Input,
Output,
EventEmitter,
ViewEncapsulation,
SimpleChanges,
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
ViewChildren,
ContentChild,
ContentChildren,
ElementRef,
QueryList
} from '@angular/core';
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

	@ViewChild(HeaderComponent) header: HeaderComponent;

	searchTrigger(search){
		this.search = search;
		console.log("In search", this.search);
	}

	constructor(){
		console.log("In root ",this.header);
	}

	ngAfterViewInit() {
		console.log("In root after view init ",this.header);
	}
};


