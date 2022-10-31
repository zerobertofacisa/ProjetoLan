import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users!: User[]
  displayedColumns = ['id', 'name', 'email', 'phone', 'password', 'action']

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.read().subscribe(users => {
      this.users = users
    })
  }

}
