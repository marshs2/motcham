import { Output, Input, Component, EventEmitter, ViewEncapsulation} from '@angular/core';
import { Search } from './shared/Search.class';
import { Login } from './shared/Login.class';

@Component({
	selector: 'side-bar',
	templateUrl: './app.sideBar.html',
	styles: [
	`
		.sideBar{
			background-color: blue;
		}
	`],
	encapsulation: ViewEncapsulation.None
})
export class SideBarComponent {
	search: Search;
	@Input('loginDetails') loginDetails: Login;
	@Output('SearchTrigger') SearchTrigger = new EventEmitter<Search>();

	constructor(){
		this.search = new Search("",false);
		this.loginDetails = new Login("","");
		console.log("loginDetails",this.loginDetails.username);
	}
	searchTerm(search){
		this.search.key = search;
		this.search.isLoggedIn = this.loginDetails.username.length > 0 ? true : false;

		this.SearchTrigger.emit(this.search);
		console.log("Search Triggered", this.search);
	}
	

}