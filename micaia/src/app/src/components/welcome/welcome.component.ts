import { Component } from '@angular/core';
import { MainContainerComponent } from "../layout/main-container/main-container.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MainContainerComponent, MatButtonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
