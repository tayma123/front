import { Component, OnInit } from '@angular/core';
import { User1 } from '../models/user'; 
import { UsersService } from '../users.service'; 
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.css']
})
export class MonProfilComponent implements OnInit {

  public editUser: User1;
  public deleteUser: User1;
  
  constructor(private usersService: UsersService, private router: Router,public authService: AuthService) { }
 
  ngOnInit(): void {
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
  public onUpdateUser(user: User1):void {
    this.usersService.updateUser(user).subscribe(
      (response: User1) => {
        console.log(response);
        
      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
