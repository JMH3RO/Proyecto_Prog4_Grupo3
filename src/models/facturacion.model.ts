import {Entity, model, property} from '@loopback/repository';

@model()
export class Facturacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idfactura?: string;

  @property({
    type: 'string',
    required: true,
  })
  idorden: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'string',
    default: "Efectivo",
  })
  metodopago?: string;


  constructor(data?: Partial<Facturacion>) {
    super(data);
  }
}

export interface FacturacionRelations {
  // describe navigational properties here
}

export type FacturacionWithRelations = Facturacion & FacturacionRelations;
