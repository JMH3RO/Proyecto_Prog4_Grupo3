/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Producto, 'idproducto'>, schemaOptions: { title: 'NewProducto', exclude: [ 'idproducto' ] })
 */
export interface NewProducto {
  categoria: string;
  descripcion?: string;
  nombre: string;
  preciounitario: number;
}
