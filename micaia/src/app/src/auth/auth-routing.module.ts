import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup-component';
import { NgModule } from '@angular/core';

// TODO: Define routes for authentication (signup,login...).

export const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
