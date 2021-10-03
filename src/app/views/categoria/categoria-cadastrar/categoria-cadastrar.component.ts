import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-cadastrar',
  templateUrl: './categoria-cadastrar.component.html',
  styleUrls: ['./categoria-cadastrar.component.css']
})
export class CategoriaCadastrarComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {}

  cadastrar(): void {
    this.categoriaService.cadastrar(this.categoria).subscribe((resposta) => {
        this.router.navigate(['categorias']);
        this.categoriaService.mensagem('Categoria cadatrada com sucesso!');
    },
    err => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.categoriaService.mensagem(err.error.errors[i].message);
      }
    })
  }

  cancelar(): void {
    this.router.navigate(['categorias']);
  }
}
