import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TabuadaComponent } from './tabuada/tabuada.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TabuadaComponent],
  templateUrl: './main.html',
})
export class App {
  name = 'Tabuada via Parâmetro';
}

bootstrapApplication(App);
