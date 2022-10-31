import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user!: User;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.readById(id).subscribe((user) => {
    this.user = user;
    });
  }

  deleteUser(): void {
    this.userService.delete(this.user.id).subscribe(() => {
      this.userService.showMessage("Usuário excluido com sucesso!");
      this.router.navigate(["/user"]);
    });
  }

}
