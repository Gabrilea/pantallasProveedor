import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresaEstablePageRoutingModule } from './ingresa-estable-routing.module';

import { IngresaEstablePage } from './ingresa-estable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresaEstablePageRoutingModule
  ],
  declarations: [IngresaEstablePage]
})
export class IngresaEstablePageModule {}
