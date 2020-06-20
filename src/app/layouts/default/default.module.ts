import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrazilComponent } from 'src/app/modules/brazil/brazil.component';
import { WorldComponent } from 'src/app/modules/world/world.component';
import { SymptomsComponent } from 'src/app/modules/symptoms/symptoms.component';
import { PreventionComponent } from 'src/app/modules/prevention/prevention.component';



@NgModule({
  declarations: [
    DefaultComponent,
    BrazilComponent,
    WorldComponent,
    SymptomsComponent,
    PreventionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    WorldComponent,
    BrazilComponent,
    SymptomsComponent,
    PreventionComponent
  ]
})
export class DefaultModule { }
