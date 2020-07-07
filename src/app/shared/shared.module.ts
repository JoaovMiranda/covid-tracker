import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// MATERIAL
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// HIGHCHARTS
import { HighchartsChartModule } from 'highcharts-angular';

// COMPONENTES
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
import { TableStatesComponent } from './widgets/brazil/table-states/table-states.component';
import { TableCountriesComponent } from './widgets/world/table-countries/table-countries.component';
import { MapComponent } from './widgets/brazil/map/map.component';
import { MapWorldComponent } from './widgets/world/map/map.component';
import { AmericaNorteComponent } from './widgets/world/card/america-norte/america-norte.component';
import { DashboardCardComponent } from './widgets/world/dashboard-card/dashboard-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterMobComponent } from './components/footer-mob/footer-mob.component';

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
    TableStatesComponent,
    TableCountriesComponent,
    MapComponent,
    MapWorldComponent,
    AmericaNorteComponent,
    DashboardCardComponent,
    LoadingComponent,
    FooterMobComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSnackBarModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableExporterModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule
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
    TableStatesComponent,
    TableCountriesComponent,
    MapComponent,
    MapWorldComponent,
    AmericaNorteComponent,
    DashboardCardComponent,
    FooterMobComponent
  ]
})
export class SharedModule { }
