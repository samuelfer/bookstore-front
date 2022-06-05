import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaAtualizarComponent } from './views/categoria/categoria-atualizar/categoria-atualizar.component';
import { CategoriaCadastrarComponent } from './views/categoria/categoria-cadastrar/categoria-cadastrar.component';
import { CategoriaListaComponent } from './views/categoria/categoria-lista/categoria-lista.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaListaComponent
  },
  {
    path: 'categorias/cadastrar',
    component: CategoriaCadastrarComponent
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaAtualizarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
