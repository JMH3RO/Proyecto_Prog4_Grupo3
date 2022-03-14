/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Orden, 'idorden'>, schemaOptions: { title: 'NewOrden', exclude: [ 'idorden' ] })
 */
export interface NewOrden {
  estado?: string;
  isv: number;
  nummesa: number;
  producto: Array<{
}>;
  subtotal: number;
  total: number;
}
