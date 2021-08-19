import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cours } from './models/cours';
import { User1 } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private host=environment.host;
  suser = false;
  choixmenu : string  = 'A';
  public dataForm:  FormGroup; 
    constructor(private http: HttpClient){
     
    }
    createData(user:User1): Observable<Object> {
      return this.http.post(`${this.host}/addUser`, user);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.host}/${id}`, value);
    }
    public getAllUsers():Observable<User1[]>{
        
        return this.http.get<User1[]>(this.host+"/getAll");
    }  
     public getUser(userName:string):Observable<User1>{
        
        return this.http.get<User1>(`${this.host}/user/find/${userName}`);
    }
    public addUser(user: User1):Observable<User1>{
        
        return this.http.post<User1>(this.host+"/addUser", user);
    }
    public updateUser(user: User1):Observable<User1>{
        
      return this.http.post<User1>(this.host+"/update", user);
  }
  public loginUser(user: User1):Observable<User1>{
        
    return this.http.post<User1>(this.host+"/login", user);
}
    
    
       
  public deleteUser(userName: String): Observable<void> {
    return this.http.delete<void>(`${this.host}/delete/${userName}`);
  }


  public getCours():Observable<Cours[]>{
        
    return this.http.get<Cours[]>("http://localhost:8080/cours/all");
}
  }

