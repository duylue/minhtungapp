import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimalComponent } from './animal/animal.component';
import { ChickenComponent } from './chicken/chicken.component';
import { PigComponent } from './pig/pig.component';
import { TigerComponent } from './tiger/tiger.component';
import { NhimComponent } from './nhim/nhim.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalComponent,
    ChickenComponent,
    PigComponent,
    TigerComponent,
    NhimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
