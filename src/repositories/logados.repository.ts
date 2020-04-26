import {DefaultCrudRepository} from '@loopback/repository';
import {Logados, LogadosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LogadosRepository extends DefaultCrudRepository<
  Logados,
  typeof Logados.prototype.id,
  LogadosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Logados, dataSource);
  }
}
