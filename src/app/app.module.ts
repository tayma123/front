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

import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './guards/auth-guard.service';

import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';




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
    BrowserAnimationsModule


  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
   


  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
