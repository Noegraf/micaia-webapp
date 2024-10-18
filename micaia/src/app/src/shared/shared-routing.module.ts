import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// TODO: Define routes that will be shared.

export const routes: Routes = [{}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
