import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { IngresaProductosPageRoutingModule } from './ingresa-productos-routing.module';

import { IngresaProductosPage } from './ingresa-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresaProductosPageRoutingModule
  ],
  declarations: [IngresaProductosPage]
})
export class IngresaProductosPageModule {}
