import {DefaultCrudRepository} from '@loopback/repository';
import {CompetitivoServersOficiais, CompetitivoServersOficiaisRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompetitivoServersOficiaisRepository extends DefaultCrudRepository<
  CompetitivoServersOficiais,
  typeof CompetitivoServersOficiais.prototype.id,
  CompetitivoServersOficiaisRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CompetitivoServersOficiais, dataSource);
  }
}
