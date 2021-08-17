import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { User1 } from '../models/user'; 
import { UsersService } from '../users.service'; 

import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User1[];
  public editUser: User1;
  public deleteUser: User1;
  
  

  constructor(private usersService: UsersService, private router: Router) { }

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
      public onOpenModal(user: User1, mode: string): void {
       const container = document.getElementById('main-container');
       const button = document.createElement('button');
       button.type = 'button';
       button.style.display = 'none';
       button.setAttribute('data-toggle', 'modal');
       if (mode === 'add') {
         button.setAttribute('data-target', '#addUserModal');
       }
       if (mode === 'edit') {
         this.editUser = user;
         button.setAttribute('data-target', '#updateUserModal');
       }
       if (mode === 'delete') {
         this.deleteUser = user;
         button.setAttribute('data-target', '#deleteUserModal');
       }
       container.appendChild(button);
       button.click();
     }
     public onAddUser(addForm: NgForm): void {
       document.getElementById('add-user-form').click();
       this.usersService.addUser(addForm.value).subscribe(
         (response: User1) => {
           console.log(response);
           this.getUsers();
           addForm.reset();
         },
         (error: HttpErrorResponse) => {
           alert(error.message);
           addForm.reset();
         }
       );
     }
     
     public onUpdateUser(user: User1):void {
      this.usersService.updateUser(user).subscribe(
        (response: User1) => {
          console.log(response);
          this.getUsers();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    public onDeleteUser(userName: String): void {
      this.usersService.deleteUser(userName).subscribe(
        (response: void) => {
          console.log(response);
          this.getUsers();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
}
