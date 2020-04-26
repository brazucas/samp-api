import {DefaultCrudRepository} from '@loopback/repository';
import {Loja, LojaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LojaRepository extends DefaultCrudRepository<
  Loja,
  typeof Loja.prototype.id,
  LojaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Loja, dataSource);
  }
}
