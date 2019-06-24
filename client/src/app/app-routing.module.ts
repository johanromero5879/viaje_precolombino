import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentsListComponent } from './contents-list/contents-list.component';
import { FormularioPreguntasComponent } from './formulario-preguntas/formulario-preguntas.component';

const routes: Routes = [
  { path: '', component: ContentsListComponent},
  { path: 'contenido', component: ContentsListComponent },
  { path: 'tema/:tema/contenido', component: ContentsListComponent },
  { path: 'recurso/:recurso', component: FormularioPreguntasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
