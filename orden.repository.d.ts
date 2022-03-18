import { DefaultCrudRepository } from '@loopback/repository';
import { ConnDataSource } from '../datasources';
import { Orden, OrdenRelations } from '../models';
export declare class OrdenRepository extends DefaultCrudRepository<Orden, typeof Orden.prototype.idorden, OrdenRelations> {
    constructor(dataSource: ConnDataSource);
}
