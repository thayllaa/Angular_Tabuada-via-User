import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabuada',
  standalone: true,
  imports: [ Comm, FormsModule ],
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {


  constructor() {}

  ngOnInit() {}
}
