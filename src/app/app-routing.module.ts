import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfilComponent } from './profil/profil.component'; 
import { ApprennantComponent } from './apprennant/apprennant.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { CoursComponent } from './cours/cours.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { FormationComponent } from './formation/formation.component';
import { MessagesComponent } from './messages/messages.component';
import { CategorieComponent } from './categorie/categorie.component';


const routes: Routes = [
{ path: "", component:HomeComponent}
,{ path: "login", component:LoginComponent}
,{ path: "users", component:UserComponent},
{ path: "profil", component:ProfilComponent},
{ path: "apprenant", component:ApprennantComponent},
{ path: "monProfil", component:MonProfilComponent},
{ path: "cours", component:CoursComponent},
{ path: "enseignant", component:EnseignantComponent},
{ path: "formation", component:FormationComponent},
{ path: "messages", component:MessagesComponent},
{ path: "categories", component:CategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
