import { Component, Output, EventEmitter, ViewChild} from '@angular/core';
import { Login } from './shared/Login.class'

@Component ({
selector: "header",
templateUrl: "app.header.html"
})
export class HeaderComponent{
	@Output('loginChanged') loginChanged = new EventEmitter<Login>();

	@ViewChild(HeaderComponent) header: HeaderComponent;

	constructor(){
		console.log("In Header :", this.header );
	}
	validateLogin(user, pwd){
		console.log("In validateLogin");
		this.loginChanged.emit(new Login(user, pwd));
	}
}