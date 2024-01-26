import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './navbar/about-us/about-us.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { NotFoundComponent } from './navbar/not-found/not-found.component';
import { ViewComponent } from './navbar/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    NavbarComponent,
    NotFoundComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
