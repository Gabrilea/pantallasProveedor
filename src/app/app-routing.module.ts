import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'ingresa-estable',
    loadChildren: () => import('./ingresa-estable/ingresa-estable.module').then( m => m.IngresaEstablePageModule)
  },
  {
    path: 'ingresa-productos',
    loadChildren: () => import('./ingresa-productos/ingresa-productos.module').then( m => m.IngresaProductosPageModule)
  },
  {
    path: 'proveedor',
    loadChildren: () => import('./proveedor/proveedor.module').then( m => m.ProveedorPageModule)
  },
  {
    path: 'perfil-proveedor',
    loadChildren: () => import('./perfil-proveedor/perfil-proveedor.module').then( m => m.PerfilProveedorPageModule)
  },
  {
    path: 'perfil-contra',
    loadChildren: () => import('./perfil-contra/perfil-contra.module').then( m => m.PerfilContraPageModule)
  },
  {
    path: 'perfil-pagos',
    loadChildren: () => import('./perfil-pagos/perfil-pagos.module').then( m => m.PerfilPagosPageModule)
  },
  {
    path: 'google',
    loadChildren: () => import('./google/google.module').then( m => m.GooglePageModule)
  },
  {
    path: 'calificacion',
    loadChildren: () => import('./calificacion/calificacion.module').then( m => m.CalificacionPageModule)
  },
  {
    path: 'problemas',
    loadChildren: () => import('./problemas/problemas.module').then( m => m.ProblemasPageModule)
  },
  {
    path: 'olvide-contra',
    loadChildren: () => import('./olvide-contra/olvide-contra.module').then( m => m.OlvideContraPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
