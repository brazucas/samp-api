import {DefaultCrudRepository} from '@loopback/repository';
import {Veiculos, VeiculosRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VeiculosRepository extends DefaultCrudRepository<
  Veiculos,
  typeof Veiculos.prototype._id,
  VeiculosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MongoDataSource,
  ) {
    super(Veiculos, dataSource);
  }
}
