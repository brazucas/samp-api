import {DefaultCrudRepository} from '@loopback/repository';
import {NmVeiculos, NmVeiculosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NmVeiculosRepository extends DefaultCrudRepository<
  NmVeiculos,
  typeof NmVeiculos.prototype.id,
  NmVeiculosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(NmVeiculos, dataSource);
  }
}
