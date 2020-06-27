import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CamerasComponent } from './components/cameras/cameras.component';


const routes: Routes = [
  {
    path: 'home-page',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cameras',
    component: CamerasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
