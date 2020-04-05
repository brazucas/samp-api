import {DefaultCrudRepository} from '@loopback/repository';
import {Casas, CasasRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CasasRepository extends DefaultCrudRepository<
  Casas,
  typeof Casas.prototype._id,
  CasasRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Casas, dataSource);
  }
}
