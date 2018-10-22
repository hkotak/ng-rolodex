import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//~~~~~~~~ IMPORT PAGES TO ROUTE TO ~~~~~~~~//
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { HomeComponent } from './pages/home/home.component'


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } //What does this one do?

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
