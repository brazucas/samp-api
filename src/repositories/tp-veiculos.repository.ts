import {DefaultCrudRepository} from '@loopback/repository';
import {TpVeiculos, TpVeiculosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TpVeiculosRepository extends DefaultCrudRepository<
  TpVeiculos,
  typeof TpVeiculos.prototype.id,
  TpVeiculosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TpVeiculos, dataSource);
  }
}
