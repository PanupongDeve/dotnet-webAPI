import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memter-list',
  templateUrl: './memter-list.component.html',
  styleUrls: ['./memter-list.component.css']
})
export class MemterListComponent implements OnInit {
  users: User[];

  constructor(private userServices: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUsersWithResolver();
  }

  loadUsersWithResolver() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  loadUsers() {
    this.userServices.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    })
  }

}
