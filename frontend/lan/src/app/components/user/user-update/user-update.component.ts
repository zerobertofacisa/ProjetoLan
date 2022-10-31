import { UsersService } from './../users.service';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user!: User

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id")!;
    this.userService.readById(id).subscribe((user) => {
    this.user = user;
    });
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage("Usuário atualizado com sucesso!");
      this.router.navigate(["/user"]);
    });
  }

  back(): void {
    this.router.navigate(["/user"]);
  }

}
