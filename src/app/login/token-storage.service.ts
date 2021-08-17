import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private IsAuthenticated: boolean;
  private Role: String;
  private roles: Array<string> = [];
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

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public saveUserId(userId: string) {
    window.sessionStorage.removeItem("userId");
    window.sessionStorage.setItem("userId", userId);
  }

  public getUserId(): string {
    return sessionStorage.getItem("userId");
  }
  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }
  
}
