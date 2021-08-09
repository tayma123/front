import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIE_KEY = 'AuthAuthoritie';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private IsAuthenticated: boolean;
  private Role: String;
  private role:string;
  constructor() { }



  signOut() {
    window.sessionStorage.clear();
  }

  public setIsAuthenticated(value: string) {

    window.localStorage.setItem("isAuthenticated", value);
  }

  public getIsAuthenticated() {
    return window.localStorage.getItem("isAuthenticated");
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRole(role: string) {
    window.sessionStorage.removeItem("role");
    window.sessionStorage.setItem("role", role);
  }

  public getRole(): string { return sessionStorage.getItem("role"); }

  public saveUserName(user_name: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, user_name);
  }

  public saveUserId(userId: string) {
    window.sessionStorage.removeItem("userId");
    window.sessionStorage.setItem("userId", userId);
  }

  public getUserId(): string {
    return sessionStorage.getItem("userId");
  }
  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthoritie(authoritie: string) {
    window.sessionStorage.removeItem(AUTHORITIE_KEY);
    window.sessionStorage.setItem(AUTHORITIE_KEY, JSON.stringify(authoritie));
  }

  public getAuthoritie(): string {
    

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIE_KEY)).forEach(authority => {
        this.role;
      });
    }

    return this.role;
  }
  
}
