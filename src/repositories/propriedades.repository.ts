import {DefaultCrudRepository} from '@loopback/repository';
import {Propriedades, PropriedadesRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PropriedadesRepository extends DefaultCrudRepository<
  Propriedades,
  typeof Propriedades.prototype._id,
  PropriedadesRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Propriedades, dataSource);
  }
}
