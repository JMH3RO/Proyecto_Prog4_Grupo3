import {Entity, model, property} from '@loopback/repository';

@model()
export class Orden extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idorden?: string;

  @property({
    type: 'number',
    required: true,
  })
  nummesa: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  producto: object[];

  @property({
    type: 'number',
    required: true,
  })
  subtotal: number;

  @property({
    type: 'number',
    required: true,
  })
  isv: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'string',
    default: "OrdenPendiente",
  })
  estado?: string;


  constructor(data?: Partial<Orden>) {
    super(data);
  }
}

export interface OrdenRelations {
  // describe navigational properties here
}

export type OrdenWithRelations = Orden & OrdenRelations;
