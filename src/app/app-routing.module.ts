import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: 'home', component: ListarComponent },
  { path: 'register', component: CadastrarComponent },
  { path: 'edit/:id', component: AtualizarComponent },
  { path: 'delete/:id', component: DeletarComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
