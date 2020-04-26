import {DefaultCrudRepository} from '@loopback/repository';
import {Proezas, ProezasRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProezasRepository extends DefaultCrudRepository<
  Proezas,
  typeof Proezas.prototype.id,
  ProezasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Proezas, dataSource);
  }
}
