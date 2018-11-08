import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//~~~~~~~~ IMPORT PAGES TO ROUTE TO ~~~~~~~~//
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { HomeComponent } from './pages/home/home.component'
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: 'api/contacts/:id', component: EditContactComponent },


  { path: '**', redirectTo: '', pathMatch: 'full' } //What does this one do?

];


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }
