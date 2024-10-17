import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './src/shared/pages/components/welcome/welcome.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./src/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
