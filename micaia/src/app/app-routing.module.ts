import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './src/shared/pages/components/welcome/welcome.component';

// TODO: Define lazy load routes and create 404 error page. Example:
/*
{
  path: '404',
  component: ErrorPageComponent
},
*/

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./src/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./src/shared/shared.module').then((m) => m.SharedModule),
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
