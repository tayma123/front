import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Catégorie } from './models/catégorie';
import { Cours } from './models/cours';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url="http://localhost:8080/cours/findByCatégorie/"
  constructor(private http: HttpClient) { }
  public getCours():Observable<Catégorie[]>{
        
    return this.http.get<Catégorie[]>("http://localhost:8080/categorie/all");
}

public getCoursByCategorie(idCt:number):Observable<Cours[]>{
        
  return this.http.get<Cours[]>(`${this.url}${idCt}`);
}  
}
