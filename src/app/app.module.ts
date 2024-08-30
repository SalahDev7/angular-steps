import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import { UsersComponent } from './users/users.component';
import { HightlightDirective } from './directives/hightlight.directive';
import { PowerPipe } from './pipes/power.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    HightlightDirective,
    PowerPipe
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
