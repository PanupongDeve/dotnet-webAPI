import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-memter-list',
  templateUrl: './memter-list.component.html',
  styleUrls: ['./memter-list.component.css']
})
export class MemterListComponent implements OnInit {
  users: User[];

  constructor(private userServices: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userServices.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    })
  }

}
