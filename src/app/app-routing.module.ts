import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroDetailComponent } from './cadastro-detail/cadastro-detail.component';

const routes: Routes = [
  { path: 'alunos', component: CadastroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CadastroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
