import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})

export class CategoriaListaComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService, 
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

  listarTodas() {
    this.categoriaService.listarTodas().subscribe(resposta => {
      this.categorias = resposta;
    });
  }

  abrirFormCadastro(): void {
    this.router.navigate(["categorias/cadastrar"]);
  }

  deletar(categoria: Categoria): void {
    this.categoriaService.deletar(categoria).subscribe((resposta) => {
      this.ngOnInit();
      this.categoriaService.mensagem('Categoria deletada com sucesso!');
    },
    err => {
      console.log(err.error)
      this.categoriaService.mensagem(err.error.error); 
    })
  }

}
