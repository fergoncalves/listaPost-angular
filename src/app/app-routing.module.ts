import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importando componentes que terão links criados
import { PostListComponent } from 'src/app/post-list/post-list.component';
import { SinglePostComponent } from 'src/app/single-post/single-post.component';

const routes: Routes = [
  {path: 'list', component: PostListComponent}, // definindo um link para o componente de ver listas
  {path: '', redirectTo: 'list', pathMatch: 'prefix'},
  {path: 'post/:id', component: SinglePostComponent} // definindo um link para o componente de ver um unico post, recebendo o id por parâmetro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
