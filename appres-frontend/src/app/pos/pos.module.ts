import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { POSRoutingModule } from './pos-routing.module';
import { FacturacionComponent } from './facturacion/facturacion.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {FormBuilder,FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FacturacionComponent
  ],
  imports: [
    CommonModule,
    POSRoutingModule,
    NzDividerModule,
    NzTableModule,
    FormsModule,
    NzFormModule,
    NzDatePickerModule,
    NzDrawerModule,
    NzInputModule,
    NzSelectModule,
    NzInputNumberModule,
    NzButtonModule,
    ReactiveFormsModule,
  ]
})
export class POSModule { }
