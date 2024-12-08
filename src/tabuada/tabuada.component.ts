import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabuada',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  @Input() num: number = 0;
  tabuada: { multiplier: number, result: number }[] = [];

  constructor() {}

  ngOnInit() {}

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;  // Cast do tipo de evento
    this.num = Number(inputElement.value);  // Converte o valor do input para número
  }

  calculate() {
    const results = [];
    for (let i = 1; i <= 10; i++) {
      results.push({ multiplier: i, result: this.num * i });
    }
    this.tabuada = results;
  }
}
