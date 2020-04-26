import {DefaultCrudRepository} from '@loopback/repository';
import {RankGeral, RankGeralRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RankGeralRepository extends DefaultCrudRepository<
  RankGeral,
  typeof RankGeral.prototype.id,
  RankGeralRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RankGeral, dataSource);
  }
}
