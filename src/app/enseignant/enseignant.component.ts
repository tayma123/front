import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { User1 } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../users.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  public editUser: User1;
  
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