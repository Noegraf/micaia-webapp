import { Component } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { BodyContainerComponent } from '../layout/body-container/body-container.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MainContainerComponent } from '../layout';

@Component({
  selector: 'app-crear-cuenta1',
  standalone: true,
  imports: [ProgressBarComponent, BodyContainerComponent, ToolbarComponent, MatButtonModule, MainContainerComponent],
  templateUrl: './crear-cuenta1.component.html',
  styleUrl: './crear-cuenta1.component.scss'
})
export class CrearCuenta1Component {

}
