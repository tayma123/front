import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


import { SidebarEnseignantComponent } from './sidebar-enseignant.component';

@NgModule({
  declarations: [
    
    SidebarEnseignantComponent,
   
  ],
  imports: [
    CommonModule,

    RouterModule,MatSidenavModule,MatListModule,

  ],
  exports: [
    
    SidebarEnseignantComponent,
  
  ]
})
export class SharedModule { }
