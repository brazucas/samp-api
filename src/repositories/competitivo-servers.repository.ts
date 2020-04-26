import {DefaultCrudRepository} from '@loopback/repository';
import {CompetitivoServers, CompetitivoServersRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompetitivoServersRepository extends DefaultCrudRepository<
  CompetitivoServers,
  typeof CompetitivoServers.prototype.id,
  CompetitivoServersRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CompetitivoServers, dataSource);
  }
}
