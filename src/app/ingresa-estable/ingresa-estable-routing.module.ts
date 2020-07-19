import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresaEstablePage } from './ingresa-estable.page';

const routes: Routes = [
  {
    path: '',
    component: IngresaEstablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresaEstablePageRoutingModule {}
