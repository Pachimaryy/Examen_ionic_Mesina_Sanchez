import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'items',
    children : [
      {
        path:'',
        loadChildren: () => import('./items/items.module').then(m => m.ItemsPageModule)
      },
      {
        path: 'add',
        loadChildren:() => import('./items/add/add.module').then(m => m.AddPageModule)
      },
      {
        path: ':itemId',
        loadChildren:() => import('./items/detail/detail.module').then(m=> m.DetailPageModule)
      }
    ]
    
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
