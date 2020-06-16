import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrazilComponent } from 'src/app/modules/brazil/brazil.component';
import { WorldComponent } from 'src/app/modules/world/world.component';



@NgModule({
  declarations: [
    DefaultComponent,
    BrazilComponent,
    WorldComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    WorldComponent,
    BrazilComponent
  ]
})
export class DefaultModule { }
