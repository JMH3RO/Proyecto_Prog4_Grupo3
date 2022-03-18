import { DefaultCrudRepository } from '@loopback/repository';
import { ConnDataSource } from '../datasources';
import { Producto, ProductoRelations } from '../models';
export declare class ProductoRepository extends DefaultCrudRepository<Producto, typeof Producto.prototype.idproducto, ProductoRelations> {
    constructor(dataSource: ConnDataSource);
}
