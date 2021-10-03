import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CategoriaListaComponent } from './views/categoria/categoria-lista/categoria-lista.component';
import { CategoriaCadastrarComponent } from './views/categoria/categoria-cadastrar/categoria-cadastrar.component';
import { CategoriaDeleteComponent } from './views/categoria/categoria-delete/categoria-delete.component';

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
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
