import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrucelComponent } from './talleres/components/carrucel/carrucel.component';

const routes: Routes = [/* { path: 'home', component: TallerComponent } */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
