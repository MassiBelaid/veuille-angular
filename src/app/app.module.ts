import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { NgOnChangeComponent } from './components/ng-on-change/ng-on-change.component';
import { HeaderComponent } from './header/header.component';
import { ChildOneComponent } from './components/ng-on-change/child-one/child-one.component';
import { ChildTwoComponent } from './components/ng-on-change/child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    NgOnChangeComponent,
    HeaderComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
