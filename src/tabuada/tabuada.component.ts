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
  counter = 0;

  constructor() {}

  ngOnInit() {}

  calculate() {
    var tabuada = '';
    var valor = this.num;
    for (var i = 1; i <= 10; i++) {
      tabuada +=
        this.num +
        ' X ' +
        this.counter +
        ' = ' +
        Number(this.num) * this.counter +
        `\n`;
    }
    return this.calculate;
  }
}
