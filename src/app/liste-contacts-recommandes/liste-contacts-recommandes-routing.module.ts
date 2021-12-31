import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeContactsRecommandesPage } from './liste-contacts-recommandes.page';

const routes: Routes = [
  {
    path: '',
    component: ListeContactsRecommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeContactsRecommandesPageRoutingModule {}
