import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';
import { AuthLoginInfo } from './login-info';
import { Router } from '@angular/router';
import { User1 } from '../models/user'; 
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  result = false;
  message = "";
  modalRef: BsModalRef;
  

  constructor(public authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
  }
  OnAddUser(user) {

 

    console.log(user);
  
    this.authService.inscritUser(user).subscribe(data => {
      this.modalRef.hide();
     
      this.result = true;
      this.message = "vous recevez un email de confirmation sur votre email "
  
    })
  
  }
 onSubmit(){
   this.authService.onSubmit();
}
}
