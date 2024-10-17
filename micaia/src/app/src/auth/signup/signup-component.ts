import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../shared/pages/components/progress-bar/progress-bar.component';
import { BodyContainerComponent } from '../../shared/pages/components/layout/body-container/body-container.component';
import { ToolbarComponent } from '../../shared/pages/components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MainContainerComponent } from '../../shared/pages/components/layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ProgressBarComponent,
    BodyContainerComponent,
    ToolbarComponent,
    MatButtonModule,
    MainContainerComponent,
    RouterModule,
  ],
  templateUrl: './signup-component.html',
  styleUrl: './signup-component.scss',
})
export class SignupComponent {}
