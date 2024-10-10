import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./src/components/toolbar/toolbar.component";
import { WelcomeComponent } from './src/components/welcome/welcome.component';
import { CrearCuenta1Component } from "./src/components/crear-cuenta1/crear-cuenta1.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, WelcomeComponent, CrearCuenta1Component, CrearCuenta1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'micaia';
}
