import { DefaultCrudRepository } from '@loopback/repository';
import { ConnDataSource } from '../datasources';
import { Facturacion, FacturacionRelations } from '../models';
export declare class FacturacionRepository extends DefaultCrudRepository<Facturacion, typeof Facturacion.prototype.idfactura, FacturacionRelations> {
    constructor(dataSource: ConnDataSource);
}
