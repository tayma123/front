import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { TokenStorageService } from '../../login/token-storage.service';
import { GestionUsersService } from '../gestion-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-admin-container',
  templateUrl: './espace-admin-container.component.html',
  styleUrls: ['./espace-admin-container.component.scss']
})
export class EspaceAdminContainerComponent implements OnInit {
  username;
  connectedUser;
  constructor(private serviceStorage: TokenStorageService, private service: GestionUsersService, private localStorage: TokenStorageService, private router: Router) { }
  showFiller = false;
  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.username = this.serviceStorage.getUserName();


    this.service.getUserInfo(this.username).subscribe(data => {
      console.log(data);
      this.connectedUser = data;

    })
  }

  logout() {

    this.localStorage.signOut();
    this.router.navigate(["../login"]);

  }

}
