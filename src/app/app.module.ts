import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Import containers
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import {MatListModule} from '@angular/material/list';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module


// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts'; 
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './guards/auth-guard.service';

import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfilComponent } from './profil/profil.component';
import { ApprennantComponent } from './apprennant/apprennant.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { CoursComponent } from './cours/cours.component';


import { SidebarEnseignantComponent } from './sidebar-enseignant/sidebar-enseignant.component';
import { FormationComponent } from './formation/formation.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { MessagesComponent } from './messages/messages.component';
import { CategorieComponent } from './categorie/categorie.component';





@NgModule({
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatStepperModule,
    HttpClientModule,
    FormsModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
    ,BrowserModule,AppRoutingModule,CommonModule,
    MatIconModule,
    BrowserAnimationsModule,MatSidenavModule,MatListModule


  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
     UserComponent,
     SidebarComponent,
     ProfilComponent,
     ApprennantComponent,
     MonProfilComponent,
     CoursComponent,
    
     SidebarEnseignantComponent,
    
     FormationComponent,
    
     EnseignantComponent,
    
     MessagesComponent,
    
     CategorieComponent
     
   


  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
