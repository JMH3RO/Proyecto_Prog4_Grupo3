import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Orden, OrdenRelations} from '../models';

export class OrdenRepository extends DefaultCrudRepository<
  Orden,
  typeof Orden.prototype.idorden,
  OrdenRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Orden, dataSource);
  }
}
