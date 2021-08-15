import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { User1 } from '../models/user';

@Component({
  selector: 'app-apprennant',
  templateUrl: './apprennant.component.html',
  styleUrls: ['./apprennant.component.css']
})
export class ApprennantComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
 
}