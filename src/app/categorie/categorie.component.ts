import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Catégorie } from '../models/catégorie';
import { FormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms' 
import { Cours } from '../models/cours';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  public categories: Catégorie[];
  public courses:Cours[];

  constructor(public catégorieService:CategorieService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  public getCategories():void{
    this.catégorieService.getCours().subscribe(
      (Response:Catégorie[])=> {
        console.log(Response);
        this.categories = Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
    }
    
    public getCoursByCategorie(idCt:number):void{
      this.catégorieService.getCoursByCategorie(idCt).subscribe(
        (Response:Cours[])=> {
          console.log(Response);
          this.courses = Response;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        });
      }
}
