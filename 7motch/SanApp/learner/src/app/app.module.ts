import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RootComponent } from './app.root';
import { HeaderComponent } from './app.header';
import { SideBarComponent } from './app.sideBar'

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
