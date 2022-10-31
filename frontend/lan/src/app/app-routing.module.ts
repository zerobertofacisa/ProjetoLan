import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"user",
    component: UsersCrudComponent
  },
  {
    path:"user/create",
    component: UserCreateComponent
  },
  {
    path: "user/update/:id",
    component: UserUpdateComponent
  },
  {
    path: "user/delete/:id",
    component: UserDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
