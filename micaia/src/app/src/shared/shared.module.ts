import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './pages/components/welcome/welcome.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, WelcomeComponent],
  exports: [],
})
export class SharedModule {}
