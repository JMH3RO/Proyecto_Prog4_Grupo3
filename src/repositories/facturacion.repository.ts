import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Facturacion, FacturacionRelations} from '../models';

export class FacturacionRepository extends DefaultCrudRepository<
  Facturacion,
  typeof Facturacion.prototype.idfactura,
  FacturacionRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Facturacion, dataSource);
  }
}
