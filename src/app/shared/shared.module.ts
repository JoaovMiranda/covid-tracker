import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/world/area/area.component';
import { CardComponent } from './widgets/world/card/card.component';
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
import { CardBrazilComponent } from './widgets/brazil/card/card.component';
import { PieBrazilComponent } from './widgets/brazil/pie/pie.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    AreaBrazilComponent,
    CardBrazilComponent,
    PieBrazilComponent,
    DialogInfoComponent,
    AfricaCardComponent,
    AmericaCardComponent,
    AsiaCardComponent,
    EuropeCardComponent,
    OceaniaCardComponent],
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
    MatButtonToggleModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    AreaBrazilComponent,
    CardBrazilComponent,
    PieBrazilComponent,
    AfricaCardComponent,
    AmericaCardComponent,
    AsiaCardComponent,
    EuropeCardComponent,
    OceaniaCardComponent
  ]
})
export class SharedModule { }
