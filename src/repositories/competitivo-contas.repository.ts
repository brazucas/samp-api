import {DefaultCrudRepository} from '@loopback/repository';
import {CompetitivoContas, CompetitivoContasRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompetitivoContasRepository extends DefaultCrudRepository<
  CompetitivoContas,
  typeof CompetitivoContas.prototype.id,
  CompetitivoContasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CompetitivoContas, dataSource);
  }
}
