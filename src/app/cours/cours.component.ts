import { Component, OnInit } from '@angular/core';
import { User1 } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../users.service'; 

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  public users: User1[];
  constructor( public usersService:UsersService) { }

  ngOnInit(){
    this.getUsers();
  }
  public getUsers():void{
      this.usersService.getAllUsers().subscribe(
        (Response:User1[])=> {
          console.log(Response);
          this.users = Response;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        });
      }

}
