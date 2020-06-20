import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/world/area/area.component';
import { PieComponent } from './widgets/world/pie/pie.component';
import { DialogInfoComponent } from './components/dialog-info/dialog-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AfricaCardComponent } from './widgets/world/card/africa-card/africa-card.component';
import { AmericaCardComponent } from './widgets/world/card/america-card/america-card.component';
import { AsiaCardComponent } from './widgets/world/card/asia-card/asia-card.component';
import { EuropeCardComponent } from './widgets/world/card/europe-card/europe-card.component';
import { OceaniaCardComponent } from './widgets/world/card/oceania-card/oceania-card.component';
import { AreaBrazilComponent } from './widgets/brazil/area/area.component';
import { PieBrazilComponent } from './widgets/brazil/pie/pie.component';
import { NordesteComponent } from './widgets/brazil/card/nordeste/nordeste.component';
import { NorteComponent } from './widgets/brazil/card/norte/norte.component';
import { SulComponent } from './widgets/brazil/card/sul/sul.component';
import { SuldesteComponent } from './widgets/brazil/card/suldeste/suldeste.component';
import { CentroOesteComponent } from './widgets/brazil/card/centro-oeste/centro-oeste.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TableBrazilComponent } from './widgets/brazil/table-brazil/table-brazil.component';
import { TableStatesComponent } from './widgets/brazil/table-states/table-states.component';
import { TableCountryComponent } from './widgets/world/table-country/table-country.component';
import { TableCountriesComponent } from './widgets/world/table-countries/table-countries.component';
import { MapComponent } from './widgets/brazil/map/map.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    AreaBrazilComponent,
    PieBrazilComponent,
    DialogInfoComponent,
    AfricaCardComponent,
    AmericaCardComponent,
    AsiaCardComponent,
    EuropeCardComponent,
    OceaniaCardComponent,
    NordesteComponent,
    NorteComponent,
    SulComponent,
    SuldesteComponent,
    CentroOesteComponent,
    TableBrazilComponent,
    TableStatesComponent,
    TableCountryComponent,
    TableCountriesComponent,
    MapComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatTableModule,
    MatCardModule,
    MatSortModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    AreaBrazilComponent,
    PieBrazilComponent,
    AfricaCardComponent,
    AmericaCardComponent,
    AsiaCardComponent,
    EuropeCardComponent,
    OceaniaCardComponent,
    NordesteComponent,
    NorteComponent,
    SulComponent,
    SuldesteComponent,
    CentroOesteComponent,
    TableBrazilComponent,
    TableStatesComponent,
    TableCountryComponent,
    TableCountriesComponent,
    MapComponent
  ]
})
export class SharedModule { }
