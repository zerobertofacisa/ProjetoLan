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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
