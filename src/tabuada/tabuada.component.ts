import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabuada',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  @Input() num: number = 0;
  show: boolean = false;
  counter = 0;

  constructor() {}

  ngOnInit() {}

  calculate() {
    var numTabuada = '';
    var valor = this.num;
    for(var count = 1; count <= 10; count++) {
        numTabuada += 
        this.num + ' X ' + count + ' = ' + Number(this.num) * count + `\n`;
      }
      return this.calculate;
    }
  }
}