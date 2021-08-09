import { Component, OnInit, TemplateRef, PipeTransform, ViewChild, Input, Output, EventEmitter, Directive, ViewChildren, QueryList } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { GestionUsersService } from '../gestion-users.service';
import { User1 } from 'src/app/models/user'; 
import { from, Observable } from 'rxjs';
//import { overrideComponentView } from '@angular/core/src/view';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}




function search(text: string, pipe: PipeTransform): User1[] {
  return this.USERS.filter(user => {
    const term = text.toLowerCase();
    return user.nom.toLowerCase().includes(term)
      || pipe.transform(user.cin).includes(term)
      || pipe.transform(user.email).includes(term);
  });
}

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.scss'],

})
export class GestionUsersComponent implements OnInit {
  USERS: User1[] = [];
  forEdit: any = {};
  users = [];
  UserAdded = false;
  UserAddedMessage = "";

  page = 1;
  pageSize = 5;
  collectionSize;
  isCollapsed = true;


  modalRef: BsModalRef;
  filter = new FormControl('');
  constructor(private modalService: BsModalService, private service: GestionUsersService,private router:Router) {

  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '') {
      this.users = this.USERS;
    } else {
      this.users = [this.USERS].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 

  onGetUsers() {
    this.service.getAllUsers().subscribe(data => {
      this.USERS = data;
      this.collectionSize = this.USERS.length;

    })
  }


  get myusers(): User1[] {


    return this.USERS.map((User, i) => ({ id: i + 1, ...User }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

userDetails(id:number){
 this.router.navigate(['details', id]);
}
  /*onDelete(user) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.service.deleteUser(user).subscribe(data => {
          console.log(data);
          this.onGetUsers();

        })
        Swal.fire(
          'Deleted!',
          '',
          'success'
        )
      }
    })



  }*/
  OnAddUser(user) {

    console.log(user);

    this.service.addUser(user).subscribe(data => {
      console.log(data);
      this.UserAdded = true;
      this.UserAddedMessage = data.message;
      this.modalRef.hide();



    }, error => {
      console.log(error.error.message);

    })
    

  }
  openModalEdit(template: TemplateRef<any>,user) {
    console.log(user);

    this.initEdit(user);
    this.modalRef = this.modalService.show(template);

  }
  initEdit(user) {

    this.forEdit.nom= user.nom;
        this.forEdit.cin = user.cin;
        this.forEdit.prenom= user.prenom;
        this.forEdit.email = user.email;
        this.forEdit.username = user.username;
        this.forEdit.password= user.password;
        this.forEdit.adresse= user.adresse;
        this.forEdit.role= user.role;
  
  }
  openModalview(template: TemplateRef<any>,user) {
    console.log(user);
    
  
this.initEdit(user);
    this.modalRef = this.modalService.show(template);

  }
  initView(user){
    console.log(user);
    this.service.getPerson(user);
  }

////view
/////


  ngOnInit() {

    this.onGetUsers();




  }



}
