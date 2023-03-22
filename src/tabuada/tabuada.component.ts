import { Component, OnInit } from '@angular/core';
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
  calculate() {}

  constructor() {
    this.calculate;
  }

  ngOnInit() {}
}
