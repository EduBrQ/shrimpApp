import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medida',
  templateUrl: './medida.component.html',
  styleUrls: ['./medida.component.scss']
})
export class MedidaComponent implements OnInit {

  @Input() titulo = '';
  @Input() medidaAtual;
  @Input() medidas;
  constructor() { }

  ngOnInit(): void {
  }

}
