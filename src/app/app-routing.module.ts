import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

import { BrazilComponent } from './modules/brazil/brazil.component';
import { WorldComponent } from './modules/world/world.component';
import { PreventionComponent } from './modules/prevention/prevention.component';
import { SymptomsComponent } from './modules/symptoms/symptoms.component';
import { MoreInformationComponent } from './modules/more-information/more-information.component';
import { ExplorerComponent } from './layouts/explorer/explorer.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: WorldComponent,
  }, {
    path: 'brazil',
    component: BrazilComponent,
  }, {
    path: 'symptoms',
    component: SymptomsComponent,
  }, {
    path: 'prevention',
    component: PreventionComponent,
  }, {
    path: 'more-information',
    component: MoreInformationComponent,
  }, {
    path: 'not-use',
    component: ExplorerComponent,
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
