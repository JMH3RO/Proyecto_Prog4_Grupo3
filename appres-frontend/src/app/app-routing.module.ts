import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'acceso/login' },
  { path: 'menus', loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule) },
  { path: 'pos', loadChildren: () => import('./pos/pos.module').then(m => m.POSModule) },
  { path: 'acceso', loadChildren: () => import('./acceso/acceso.module').then(m => m.AccesoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
