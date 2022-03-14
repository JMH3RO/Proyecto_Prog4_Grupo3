/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: OrdenWithRelations, schemaOptions: { includeRelations: true })
 */
export interface OrdenWithRelations {
  estado?: string;
  idorden?: string;
  isv: number;
  nummesa: number;
  producto: Array<{
}>;
  subtotal: number;
  total: number;
}
