import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

//lazy-loading
const routes: Routes = [

  { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'aruk', loadChildren: () => import('./pages/aruk/aruk.module').then(m => m.ArukModule),
  canActivate: [AuthGuard] },
  { path: 'forum', loadChildren: () => import('./pages/forum/forum.module').then(m => m.ForumModule),
  canActivate: [AuthGuard] },
  { path: 'kosar', loadChildren: () => import('./pages/kosar/kosar.module').then(m => m.KosarModule),
    canActivate: [AuthGuard]

},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'regist', loadChildren: () => import('./pages/regist/regist.module').then(m => m.RegistModule) },
  { path: '',
    redirectTo: '/login',
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
