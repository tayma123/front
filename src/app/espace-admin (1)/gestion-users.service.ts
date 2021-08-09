import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
const url: string = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class GestionUsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(url + '/users/all');
  }

  addUser(user): Observable<any> {
    return this.http.post(url + "/addUser", user);
  }
  inscritUser(user): Observable<any> {
    return this.http.post(url + "/auth/signUp", user);
  }
  

  deleteUser(user): Observable<any> {
    return this.http.delete(url + "/deleteUser/" + user.id);
  }

  getUserInfo(username): Observable<any>  {
    return this.http.get(url + "/getByUsername/" + username);
  }
  getPerson(id:number): Observable<any>{
    return this.http.get(url+"/show/"+ id)
  }
}
