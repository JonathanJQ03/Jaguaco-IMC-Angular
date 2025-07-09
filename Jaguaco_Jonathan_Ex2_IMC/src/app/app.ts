import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorPesoComponent } from './components/contador-peso.component/contador-peso.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContadorPesoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Jaguaco_Jonathan_Ex2_IMC';
}
