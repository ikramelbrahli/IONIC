import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeContactsRecommandesPageRoutingModule } from './liste-contacts-recommandes-routing.module';

import { ListeContactsRecommandesPage } from './liste-contacts-recommandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeContactsRecommandesPageRoutingModule
  ],
  declarations: [ListeContactsRecommandesPage]
})
export class ListeContactsRecommandesPageModule {}
