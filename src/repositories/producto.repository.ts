import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.idproducto,
  ProductoRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: MongodbDataSource,
  ) {
    super(Producto, dataSource);
  }
}
