import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';
import { AuthLoginInfo } from './login-info';
import { Router } from '@angular/router';
import { User1 } from '../models/user'; 
import {NgForm} from '@angular/forms';
import { GestionUsersService } from '../espace-admin (1)/gestion-users.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  result = false;
  message = "";
  modalRef: BsModalRef;
  

  constructor(public authService: AuthService,private service: GestionUsersService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
  }
  OnAddUser(user) {

 

    console.log(user);
  
    this.service.inscritUser(user).subscribe(data => {
      this.modalRef.hide();
     
      this.result = true;
      this.message = "votre cv a été bien envoyé avec succés"
  
    })
  
  }
 onSubmit(){
   this.authService.onSubmit();
}
}
