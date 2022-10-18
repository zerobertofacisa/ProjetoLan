import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  usuario = {
    nome: 'Raquel Souto',
    telefone: '(83) 996277535',
    email: 'raquel.winkeler@maisunifacisa.com.br',
    senha: '123456'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarUsuario() {
    alert("Usuário cadastrado com sucesso!")
  }

}
