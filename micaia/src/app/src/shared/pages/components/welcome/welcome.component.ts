import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout/main-container/main-container.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MainContainerComponent, MatButtonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
