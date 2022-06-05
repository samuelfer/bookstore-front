import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-atualizar',
  templateUrl: './categoria-atualizar.component.html',
  styleUrls: ['./categoria-atualizar.component.css']
})
export class CategoriaAtualizarComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private activedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria.id =  this.activedRouter.snapshot.paramMap.get('id')!;
    this.listarPorId();
  }

  listarPorId(): void {
    this.categoriaService.listarPorId(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    })
  }

  cancelar(): void {
    this.router.navigate(['categorias']);
  }

  update(): void {
    console.log('Entrei')
  }
}
