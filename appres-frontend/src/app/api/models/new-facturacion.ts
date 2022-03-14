/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Facturacion, 'idfactura'>, schemaOptions: { title: 'NewFacturacion', exclude: [ 'idfactura' ] })
 */
export interface NewFacturacion {
  idorden: string;
  metodopago?: string;
  total: number;
}
