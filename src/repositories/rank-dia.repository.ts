import {DefaultCrudRepository} from '@loopback/repository';
import {RankDia, RankDiaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RankDiaRepository extends DefaultCrudRepository<
  RankDia,
  typeof RankDia.prototype.id,
  RankDiaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RankDia, dataSource);
  }
}
