import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilContraPageRoutingModule } from './perfil-contra-routing.module';

import { PerfilContraPage } from './perfil-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilContraPageRoutingModule
  ],
  declarations: [PerfilContraPage]
})
export class PerfilContraPageModule {}
