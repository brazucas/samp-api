import {DefaultCrudRepository} from '@loopback/repository';
import {CompetitivoFila, CompetitivoFilaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompetitivoFilaRepository extends DefaultCrudRepository<
  CompetitivoFila,
  typeof CompetitivoFila.prototype.id,
  CompetitivoFilaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CompetitivoFila, dataSource);
  }
}
