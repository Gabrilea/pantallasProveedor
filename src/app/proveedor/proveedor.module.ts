import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedorPageRoutingModule } from './proveedor-routing.module';

import { ProveedorPage } from './proveedor.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProveedorPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: ( ) => import('../home/home.module').then(m => m.HomePageModule),
          }
        ]
      },
      {
        path: 'establecimiento',
        children: [
          {
            path: '',
            loadChildren: '../establecimiento/establecimiento.module#EstablecimientoPageModule',
          }
        ]
      },
      {
        path: 'productos',
        children: [
          {
            path: '',
            loadChildren: '../productos/productos.module#ProductosPageModule',
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../perfil/perfil.module#PerfilPageModule',
          }
        ]
      },
      {
        path: '',
        redirectTo: '/proveedor/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/proveedor/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedorPageRoutingModule
  ],
  declarations: [ProveedorPage]
})
export class ProveedorPageModule {}