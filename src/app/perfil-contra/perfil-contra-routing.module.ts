import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilContraPage } from './perfil-contra.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilContraPageRoutingModule {}
