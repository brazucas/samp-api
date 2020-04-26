import {DefaultCrudRepository} from '@loopback/repository';
import {VlVeiculos, VlVeiculosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VlVeiculosRepository extends DefaultCrudRepository<
  VlVeiculos,
  typeof VlVeiculos.prototype.id,
  VlVeiculosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(VlVeiculos, dataSource);
  }
}
