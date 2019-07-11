import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.modules';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class AppModule { }
