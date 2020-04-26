import {DefaultCrudRepository} from '@loopback/repository';
import {Recordes, RecordesRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RecordesRepository extends DefaultCrudRepository<
  Recordes,
  typeof Recordes.prototype._id,
  RecordesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MongoDataSource,
  ) {
    super(Recordes, dataSource);
  }
}
