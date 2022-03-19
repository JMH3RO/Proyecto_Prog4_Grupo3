import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Facturacion } from 'src/app/api/models';
import { FacturacionControllerService } from 'src/app/api/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  constructor(
    private fb: FormBuilder,//Inyeccion de la herramienta para construir formularios
    private FacturacionServices:FacturacionControllerService
  ) {
    }

//Creo(FormGroup) y defino estructura de un formulario(FormBuilder)
  formFacturacion: FormGroup  =   this.fb.group({
    idfactura:[],
    idorden:[,[Validators.required]],
    total:[,[Validators.required]],
    metodopago:[,[Validators.required]],
    
  })
;

visible:boolean=false
facturacion:Facturacion[]=[]; //Arreglo de datos de productos

  open(data?:Facturacion): void {
    if(data)
      this.formFacturacion.setValue(data)
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.formFacturacion.reset()
  }

  ngOnInit(): void {
    this.getFacturas()
  }

  getFacturas():void{
    this.FacturacionServices.find().subscribe(datos => this.facturacion = datos )
  }

  guardar():void{
    if(this.formFacturacion.value.idfactura){//Actualizar si existe id
      this.FacturacionServices.updateById({'id':this.formFacturacion.value.idfactura,'body':this.formFacturacion.value}).subscribe(
        () => 
        {
          this.facturacion = this.facturacion.map(obj => {
            if (obj.idfactura === this.formFacturacion.value.idfactura)
              return this.formFacturacion.value;          
            return obj;
          });

          this.formFacturacion.reset()
          this.close();
        }
      )
    }else{//crea uno nuevo si no existe
    delete this.formFacturacion.value.idfactura
    this.FacturacionServices.create({'body':this.formFacturacion.value}).subscribe(
      datoAgregado=>
      {
        this.facturacion = [...this.facturacion,datoAgregado]
        this.formFacturacion.reset()
        this.close();
      }
      )
    }
  }

  delete(id:any):void{
    this.FacturacionServices.deleteById({id}).subscribe(() => {
      this.facturacion = this.facturacion.filter(x => x.idfactura !== id);
    })
  }
}