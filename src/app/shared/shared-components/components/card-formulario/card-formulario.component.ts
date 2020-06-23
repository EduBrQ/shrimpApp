import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SimNaoEnum } from '@shared/models/enum/sim-nao.enum';
import { InfoComplementarVisuzalizar } from 'app/modules/public/models/interface/info-complementar.model';

@Component({
  selector: 'app-card-formulario',
  templateUrl: './card-formulario.component.html',
  styleUrls: ['./card-formulario.component.css']
})
export class CardFormularioComponent implements OnChanges {

  @Input() infoComplementarVisualizar: InfoComplementarVisuzalizar;
  @Input() exibirTerrenoIndiviso: boolean;
  simNaoEnum = SimNaoEnum;

  constructor(
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['infoComplementarVisualizar']) {
      this.replaceOutros();
    }
  }

  replaceOutros() {
    if (this.infoComplementarVisualizar) {
      if (this.infoComplementarVisualizar.tiposProposta.length > 0) {
        const propostas = this.infoComplementarVisualizar.tiposProposta;

        if (propostas.find((proposta) => proposta === "Outros")) {
          const index = propostas.indexOf("Outros");
          if (index > -1) {
            propostas.splice(index, 1);
          }

          propostas.push(this.infoComplementarVisualizar.nomeOutro);
          this.infoComplementarVisualizar.tiposProposta = propostas;
        } 
      }
    }
  }
}