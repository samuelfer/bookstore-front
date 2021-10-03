import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})

export class CategoriaListaComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

  listarTodas() {
    this.service.listarTodas().subscribe(resposta => {
      console.log('Resposta ', resposta)
      this.categorias = resposta;
    });
  }

}
