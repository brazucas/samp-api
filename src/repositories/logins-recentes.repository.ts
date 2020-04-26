import {DefaultCrudRepository} from '@loopback/repository';
import {LoginsRecentes, LoginsRecentesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LoginsRecentesRepository extends DefaultCrudRepository<
  LoginsRecentes,
  typeof LoginsRecentes.prototype.id,
  LoginsRecentesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(LoginsRecentes, dataSource);
  }
}
