import { ListarUsuariosComponent } from './componentes/usuario/listar-usuarios/listar-usuarios.component';
import { CriarComponent } from './componentes/usuario/criar/criar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarUsuario',
    pathMatch: 'full'
  },
  {
    path: 'addUsuario',
    component: CriarComponent
  },
  {
    path: 'listarUsuario',
    component: ListarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
