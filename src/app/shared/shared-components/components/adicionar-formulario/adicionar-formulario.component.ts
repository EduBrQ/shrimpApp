import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListaFormModel } from 'app/modules/private/modules/requerimento/modules/cadastro-requerimento/components/lista-formularios/models/lista-form.model';

@Component({
  selector: 'app-adicionar-formulario',
  templateUrl: './adicionar-formulario.component.html',
  styleUrls: ['./adicionar-formulario.component.css']
})
export class AdicionarFormularioComponent implements OnInit {

  @Input() formModel: ListaFormModel;

  @Input() visivel = true;

  @Input() disableButton = false;

  @Output() mostrarForm = new EventEmitter;

  constructor() {}

  ngOnInit() {
  }

  adicionar() {
    this.mostrarForm.emit(false);
  }

}
