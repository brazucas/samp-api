import {DefaultCrudRepository} from '@loopback/repository';
import {Impostos, ImpostosRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ImpostosRepository extends DefaultCrudRepository<
  Impostos,
  typeof Impostos.prototype._id,
  ImpostosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Impostos, dataSource);
  }
}
