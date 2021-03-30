import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AnimalComponent} from './animal/animal.component';
import {ChickenComponent} from './chicken/chicken.component';
import {NhimComponent} from './nhim/nhim.component';
import {TigerComponent} from './tiger/tiger.component';
import {PigComponent} from './pig/pig.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'animal', component: AnimalComponent},
  {path: 'chicken', component: ChickenComponent},
  {path: 'nhim', component: NhimComponent},
  {path: 'tiger', component: TigerComponent},
  {path: 'pig', component: PigComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
