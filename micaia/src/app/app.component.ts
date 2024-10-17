import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './src/shared/pages/components/toolbar/toolbar.component';
import { WelcomeComponent } from './src/shared/pages/components/welcome/welcome.component';
import { SignupComponent } from './src/auth/signup/signup-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, WelcomeComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'micaia';
}
