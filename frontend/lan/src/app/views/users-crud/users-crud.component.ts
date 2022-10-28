import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.css']
})
export class UsersCrudComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  navigateToUserCreate(): void {
    this.router.navigate(['/users/create'])
  }

}
