import {DefaultCrudRepository} from '@loopback/repository';
import {RankMes, RankMesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RankMesRepository extends DefaultCrudRepository<
  RankMes,
  typeof RankMes.prototype.id,
  RankMesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RankMes, dataSource);
  }
}
