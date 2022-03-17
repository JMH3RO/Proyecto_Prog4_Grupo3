import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { POSRoutingModule } from './pos-routing.module';
import { FacturacionComponent } from './facturacion/facturacion.component';


@NgModule({
  declarations: [
    FacturacionComponent
  ],
  imports: [
    CommonModule,
    POSRoutingModule
  ]
})
export class POSModule { }
