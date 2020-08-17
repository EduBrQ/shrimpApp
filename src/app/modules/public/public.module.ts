import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CamerasComponent } from './components/cameras/cameras.component';
import { PhComponent } from './components/medidas/ph/ph.component';
import { OxigenioComponent } from './components/medidas/oxigenio/oxigenio.component';
import { TemperaturaComponent } from './components/medidas/temperatura/temperatura.component';
import { RacaoComponent } from './components/racao/racao.component';
import { AeradoresComponent } from './components/aeradores/aeradores.component';
import { AeradorComponent } from './components/aeradores/aerador/aerador.component';
import { ViveiroComponent } from './components/viveiros/viveiro/viveiro.component';
import { MedicoesComponent } from './components/viveiros/viveiro/medicoes/medicoes.component';
import { ListaViveirosComponent } from './components/viveiros/lista-viveiros.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    CamerasComponent,
    PhComponent,
    OxigenioComponent,
    TemperaturaComponent,
    RacaoComponent,
    AeradoresComponent,
    AeradorComponent,
    ViveiroComponent,
    ListaViveirosComponent,
    MedicoesComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedComponentsModule,
  ]
})
export class PublicModule { }
