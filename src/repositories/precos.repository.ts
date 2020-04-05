import {DefaultCrudRepository} from '@loopback/repository';
import {Precos, PrecosRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PrecosRepository extends DefaultCrudRepository<
  Precos,
  typeof Precos.prototype._id,
  PrecosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Precos, dataSource);
  }
}
