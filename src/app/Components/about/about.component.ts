import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
