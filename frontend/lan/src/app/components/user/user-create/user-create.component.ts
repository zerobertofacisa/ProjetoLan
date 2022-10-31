import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

    user: User = {
    id: 0,
    email: '',
    name: '',
    phone: '',
    password: ''
  }

  constructor(private UsersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.UsersService.create(this.user).subscribe(() => {
    this.UsersService.showMessage('Usuário cadastrado!')
    this.router.navigate(['/user'])
    })
  }
}
