import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';
import { User1 } from '../models/user';
import { BsModalRef } from 'ngx-bootstrap/modal';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  form: any = {};
  test;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  USERS: User1[] = [];
  forEdit: any = {};
  users = [];
  UserAdded = false;
  UserAddedMessage = "";
 user:User1;
  page = 1;
  pageSize = 5;
  collectionSize;
  isCollapsed = true;
  
  result = false;
  message = "";
  modalRef: BsModalRef;
  
  public id:number;
  public loggedUser: string;
  public password:string;
  public role:string;
  public telephone : number;
  public gender: string;
  public email:string;
  public firstName: string;
  public lastName:string;
  public isEnabled: boolean;
  public adress: string;



 
  
  private loginUrl = 'http://localhost:8080/auth/signIn';
  private signupUrl = 'http://localhost:8080/auth/signUp';
  static loggedUser: string;

  constructor(private http: HttpClient, private storageService: TokenStorageService, private router: Router,private tokenStorage: TokenStorageService) {
  }

  public isAuthenticated(): boolean {
    return this.storageService.getToken() != null;
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.userName,
      this.form.passWord);

    this.attemptAuth(this.loginInfo).subscribe(
      data => {

        this.test = data.authorities[0];
        
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.userName);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.tokenStorage.saveRole(this.test.authority)

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        
        console.log(this.tokenStorage.getRole());
      
       this.router.navigate(['/']);
     
       this.getUserFromDB(this.form.userName).subscribe((user:User1)=> {
        this.loggedUser=user.userName;
        this.telephone=user.telephone;
        this.password =user.passWord;
        this.role = user.role;
        this.adress=user.adress;
        this.lastName=user.lastName;
        this.firstName=user.firstName;
        this.email=user.email;
        this.isEnabled=user.isEnabled;
        this.gender=user.gender;
        this.user=user;
        this.id=user.id;
        this.form.userName=null;
      this.form.passWord=null;
        
       })

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
   getUserFromDB(userName:string):Observable<User1>{
     return this.http.get<User1>(`http://localhost:8080/getByUserName/${userName}`);

  }
  
  
  
  logout() {
    this.storageService.signOut();
    this.router.navigate['/login'];

  }
  isAdmin():Boolean{
    console.log("role "+this.role);
    if (!this.role) //this.roles== undefiened
        return false;
    return (this.role.indexOf('ADMIN') >-1) ;
    }
     isApprenant():Boolean{
    console.log("role "+this.role);
    if (!this.role) //this.roles== undefiened
        return false;
    return (this.role.indexOf('APPRENANT') >-1) ;
    }
    isFormateur():Boolean{
      console.log("role "+this.role);
      if (!this.role) //this.roles== undefiened
          return false;
      return (this.role.indexOf('FORMATEUR') >-1) ;
      }
    ResetForm() {
      this.form.userName=null;
      this.form.passWord=null;
      this.isLoggedIn=false;
     this.loggedUser=null;
  }
  inscritUser(user): Observable<any> {
    return this.http.post("http://localhost:8080/auth/signUp", user);
  }
  
}
