import { NgModule } from '@angular/core';

import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { Routes, RouterModule } from '@angular/router';

import { ModalModule } from "ngx-bootstrap/modal";
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgbModule, NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { EspaceAdminContainerComponent } from './espace-admin-container/espace-admin-container.component';

import { AuthGuardService } from '../guards/auth-guard.service'; 

const routes: Routes = [
  {
    path: 'acceuil',
    component: EspaceAdminContainerComponent,
    children: [
      {
        path: '',
        component: GestionUsersComponent
      }
     
    ]
  }
];

@NgModule({
  declarations: [GestionUsersComponent, EspaceAdminContainerComponent],
  imports: [RouterModule.forChild(routes),
    MatIconModule,
    ModalModule,
    MatButtonModule,

  NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,

    CommonModule



  ],
  providers: [BsModalService,
  ]



})
export class EspaceAdminModule { }
