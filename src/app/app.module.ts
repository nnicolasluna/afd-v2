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
import { TextComponent } from './items/componentes/text/text.component';
import { GenericlistComponent } from './items/componentes/genericlist/genericlist.component';
import { BotonesEvaluamosComponent } from './items/componentes/botones-evaluamos/botones-evaluamos.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConveniosComponent } from './convenios/convenios.component';
import { ManualesComponent } from './manuales/manuales.component';
import { TalleresComponent } from './talleres/talleres.component';
import { AlternativasComponent } from './alternativas/alternativas.component';
import { LeyendaComponent } from './items/componentes/leyenda/leyenda.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { PdfViwerComponent } from './items/componentes/pdf-viwer/pdf-viwer.component';
import { PrePostComponent } from './items/componentes/pre-post/pre-post.component';
import { FocosdeCalorComponent } from './items/componentes/focosde-calor/focosde-calor.component';
import { QuemasComponent } from './items/componentes/quemas/quemas.component';
import { FloraFaunaComponent } from './items/componentes/flora-fauna/flora-fauna.component';
import { AreasAfectadasComponent } from './items/componentes/areas-afectadas/areas-afectadas.component';
import { RestauracionComponent } from './items/componentes/restauracion/restauracion.component';
import { RegeneracionComponent } from './items/componentes/regeneracion/regeneracion.component';
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
    AlterRightbarComponent,
    TextComponent,
    GenericlistComponent,
    BotonesEvaluamosComponent,
    ConveniosComponent,
    ManualesComponent,
    TalleresComponent,
    AlternativasComponent,
    LeyendaComponent,
    RecuperacionComponent,
    PdfViwerComponent,
    PrePostComponent,
    FocosdeCalorComponent,
    QuemasComponent,
    FloraFaunaComponent,
    AreasAfectadasComponent,
    RestauracionComponent,
    RegeneracionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
