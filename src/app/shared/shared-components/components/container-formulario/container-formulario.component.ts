import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-formulario',
  templateUrl: './container-formulario.component.html',
  styleUrls: ['./container-formulario.component.css']
})
export class ContainerFormularioComponent implements OnInit {
  @Input() titulo: string;
  @Input() tituloClasse = 'h6';
  @Input() removerPadding = false;
  @Input() removerEstilizacao = false;
  @Input() removerMarginBottom = false;
  @Input() backGradient = false;

  constructor() { }

  ngOnInit() {
  }

}
