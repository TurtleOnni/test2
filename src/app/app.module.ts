import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {TreeComponent} from "./tree/tree.component";
import {OrderByPipe} from "./tree/orderBy.pipe";
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, TreeComponent, OrderByPipe ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }