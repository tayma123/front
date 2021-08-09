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
  form: any = {};
  test;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string ;
  private loginInfo: AuthLoginInfo;
  USERS: User1[] = [];
  forEdit: any = {};
  users = [];
  UserAdded = false;
  UserAddedMessage = "";

  page = 1;
  pageSize = 5;
  collectionSize;
  isCollapsed = true;

  result = false;
  message = "";
  modalRef: BsModalRef;
  

  constructor(private authService: AuthService,private service: GestionUsersService, private tokenStorage: TokenStorageService, private router: Router) { }

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
  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.userName,
      this.form.passWord);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {

        this.test = data.authoritie;
       
        console.log(data);


        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUserName(data.user_name);
        this.tokenStorage.saveAuthoritie(data.authoritie);
        this.tokenStorage.saveRole(this.test.authority)

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        console.log(this.tokenStorage.getRole());
      

      
      // this.router.navigate(['../admin/acceuil']);
       
      //this.router.navigate(['../espacett/hello']);

     // this.router.navigate(['../espaceclient/bienvenu']);

 

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }


}
