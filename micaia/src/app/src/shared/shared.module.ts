import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedRoutingModule } from './shared-routing.module';
import { WelcomeComponent } from './pages/components/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    WelcomeComponent,
  ],
})
export class SharedModule {}
