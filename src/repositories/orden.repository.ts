import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Orden, OrdenRelations} from '../models';

export class OrdenRepository extends DefaultCrudRepository<
  Orden,
  typeof Orden.prototype.id,
  OrdenRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Orden, dataSource);
  }
}
