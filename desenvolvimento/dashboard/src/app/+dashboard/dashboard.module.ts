import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdMenuModule } from '@angular2-material/menu';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip';

import { MdlModule } from '../shared/directives/mdl/mdl.module';

import { PolymerElement } from '@vaadin/angular2-polymer';

import { CadastroComponent } from '../shared/directives/cadastro/cadastro.component';
import { StarComponent, RatingComponent } from '../shared/directives/rating/rating.component';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../+home/home.component';
import { AvaliacaoComponent } from '../+avaliacao/avaliacao.component';
import { CaracteristicaComponent } from '../+caracteristica/caracteristica.component';
import {
  CaracteristicaTipoPontoInteresseComponent
} from '../+caracteristica-tipo-ponto-interesse/caracteristica-tipo-ponto-interesse.component';
import { TipoAgendaComponent } from '../+tipo-agenda/tipo-agenda.component';
import { TipoDadoComponent } from '../+tipo-dado/tipo-dado.component';
import { TipoPontoInteresseComponent } from '../+tipo-ponto-interesse/tipo-ponto-interesse.component';
import { TipoTransporteComponent } from '../+tipo-transporte/tipo-transporte.component';
import { TransporteComponent } from '../+transporte/transporte.component';

import { dashboardRouting } from './dashboard.routing';

@NgModule({
  declarations: [
    CadastroComponent,
    StarComponent,
    RatingComponent,

    DashboardComponent,
    HomeComponent,
    AvaliacaoComponent,
    CaracteristicaComponent,
    CaracteristicaTipoPontoInteresseComponent,
    TipoAgendaComponent,
    TipoDadoComponent,
    TipoPontoInteresseComponent,
    TipoTransporteComponent,
    TransporteComponent,

    PolymerElement('vaadin-grid'),
    PolymerElement('vaadin-combo-box'),
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule,
    MdTabsModule,
    MdToolbarModule,
    MdGridListModule,
    MdTooltipModule,

    MdlModule,

    dashboardRouting
  ],
  providers: [
    MdIconRegistry
  ]
})
export class DashboardModule { }
