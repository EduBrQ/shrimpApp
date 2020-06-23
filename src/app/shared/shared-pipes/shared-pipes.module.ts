import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CpfCnpjPipe } from './pipes/cpf-cnpj.pipe';
import { SimNaoPipe } from './pipes/sim-nao.pipe';
import { StatusRequerimentPipe } from './pipes/status-requerimento.pipe';
import { TipoRequerimentPipe } from './pipes/tipo-requerimento.pipe';
import { AtualizacaoRequerimentPipe } from './pipes/atualizacao-requerimento.pipe';
import { ModalidadeParcelamentoPipe } from './pipes/modalidade-parcelamento.pipe';
import { MetragemPipe } from './pipes/metragem.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SimNaoPipe,
    CpfCnpjPipe,
    StatusRequerimentPipe,
    TipoRequerimentPipe,
    AtualizacaoRequerimentPipe,
    ModalidadeParcelamentoPipe,
    MetragemPipe
  ],
  exports: [
    MetragemPipe,
    SimNaoPipe,
    CpfCnpjPipe,
    StatusRequerimentPipe,
    TipoRequerimentPipe,
    AtualizacaoRequerimentPipe,
    ModalidadeParcelamentoPipe
  ]
})
export class SharedPipesModule {
}
