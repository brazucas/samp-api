import {DefaultCrudRepository} from '@loopback/repository';
import {RankV, RankVRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RankVRepository extends DefaultCrudRepository<
  RankV,
  typeof RankV.prototype.id,
  RankVRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RankV, dataSource);
  }
}
