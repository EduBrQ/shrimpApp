import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CamerasComponent } from './components/cameras/cameras.component';
import { MedidaComponent } from './components/medida/medida.component';
import { PhComponent } from './components/medidas/ph/ph.component';
import { OxigenioComponent } from './components/medidas/oxigenio/oxigenio.component';
import { TemperaturaComponent } from './components/medidas/temperatura/temperatura.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, CamerasComponent, MedidaComponent, PhComponent, OxigenioComponent, TemperaturaComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedComponentsModule,
  ]
})
export class PublicModule { }
