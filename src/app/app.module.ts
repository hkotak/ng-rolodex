import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { FilterPipe } from './services/filter.pipe';

import { BackendService } from './services/backend.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';


@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    HomeComponent,
    ProfileComponent,
    ContactsComponent,
    NewContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
