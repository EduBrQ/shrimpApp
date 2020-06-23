import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedComponentsModule
  ]
})
export class PublicModule { }
