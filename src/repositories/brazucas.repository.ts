import {DefaultCrudRepository} from '@loopback/repository';
import {Brazucas, BrazucasRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BrazucasRepository extends DefaultCrudRepository<
  Brazucas,
  typeof Brazucas.prototype._id,
  BrazucasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MongoDataSource,
  ) {
    super(Brazucas, dataSource);
  }
}
