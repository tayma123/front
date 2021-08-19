import { Component, OnInit } from '@angular/core';
import { User1 } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../users.service'; 
import { Cours } from '../models/cours';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  public cours: Cours[];
  constructor( public usersService:UsersService) { }

  ngOnInit(){
    this.getUsers();
  }
  public getUsers():void{
      this.usersService.getCours().subscribe(
        (Response:Cours[])=> {
          console.log(Response);
          this.cours = Response;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        });
      }

}
