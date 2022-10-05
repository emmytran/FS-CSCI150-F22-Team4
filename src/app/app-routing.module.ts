import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home' ,
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./tabs/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./tabs/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./tabs/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'trusted-lists',
    loadChildren: () => import('./tabs/trusted-lists/trusted-lists.module').then( m => m.TrustedListsPageModule)
  },
  {
    path: 'add-contacts',
    loadChildren: () => import('./pages/add-contacts/add-contacts.module').then( m => m.AddContactsPageModule)
  },
  {
    path: 'add-now',
    loadChildren: () => import('./pages/add-now/add-now.module').then( m => m.AddNowPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
