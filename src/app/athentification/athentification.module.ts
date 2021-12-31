import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AthentificationPageRoutingModule } from './athentification-routing.module';

import { AthentificationPage } from './athentification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthentificationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AthentificationPage]
})
export class AthentificationPageModule {}
