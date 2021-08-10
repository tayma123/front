import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {CommonModule } from '@angular/common';


const routes: Routes = [
{ path: "", component:HomeComponent},{ path: "login", component:LoginComponent},{ path: "users", component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
