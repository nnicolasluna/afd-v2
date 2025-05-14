import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './items/cabecera/cabecera.component';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './items/menu/menu.component';
import { RightbarComponent } from './items/rightbar/rightbar.component';
import { LeftbarComponent } from './items/leftbar/leftbar.component';
import { SimpleCardComponent } from './items/componentes/simple-card/simple-card.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { EvaluamosComponent } from './diagnostico/evaluamos/evaluamos.component';
import { VerDiagComponent } from './diagnostico/ver-diag/ver-diag.component';
import { TableComponent } from './items/componentes/table/table.component';
import { BotonesDiagRecuAlteComponent } from './items/componentes/botones-diag-recu-alte/botones-diag-recu-alte.component';
import { CardGenericoComponent } from './items/componentes/card-generico/card-generico.component';
import { AlterRightbarComponent } from './items/alter-rightbar/alter-rightbar.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabeceraComponent,
    MenuComponent,
    RightbarComponent,
    LeftbarComponent,
    SimpleCardComponent,
    DiagnosticoComponent,
    EvaluamosComponent,
    VerDiagComponent,
    TableComponent,
    BotonesDiagRecuAlteComponent,
    CardGenericoComponent,
    AlterRightbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
