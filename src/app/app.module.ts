import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './core/services/app.service';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }


