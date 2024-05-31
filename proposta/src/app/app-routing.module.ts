import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaliseCreditoComponent } from './components/analise-credito/analise-credito.component';
import { SolicitacaoComponent } from './components/solicitacao/solicitacao.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: "", component: SolicitacaoComponent
  },
  {
    path: "analises", component: AnaliseCreditoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
