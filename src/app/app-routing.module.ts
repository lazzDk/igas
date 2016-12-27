import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { OverviewComponent } from './overview/overview.component';
import { GasEntryComponent } from './gas-entry/gas-entry.component';
import { GasEntryDetailsComponent } from './gas-entry-details/gas-entry-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gas-entry',
    pathMatch: 'full'
  },
  {
    path: 'setup',
    component: SetupComponent
  }, {
    path: 'overview',
    component: OverviewComponent
  } ,{
    path: 'gas-entry',
    component: GasEntryComponent
  }
  ,{
    path: 'gas-entry/:id',
    component: GasEntryDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [
    RouterModule
    ]
})
export class AppRoutingModule  { }
