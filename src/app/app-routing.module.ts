import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//lazy-loading
const routes: Routes = [

  { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'aruk', loadChildren: () => import('./pages/aruk/aruk.module').then(m => m.ArukModule) },
  { path: 'forum', loadChildren: () => import('./pages/forum/forum.module').then(m => m.ForumModule) },
  { path: 'kosar', loadChildren: () => import('./pages/kosar/kosar.module').then(m => m.KosarModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'regist', loadChildren: () => import('./pages/regist/regist.module').then(m => m.RegistModule) },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
      redirectTo: '/not-found',
    },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
