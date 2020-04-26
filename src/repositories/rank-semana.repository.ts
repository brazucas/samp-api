import {DefaultCrudRepository} from '@loopback/repository';
import {RankSemana, RankSemanaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RankSemanaRepository extends DefaultCrudRepository<
  RankSemana,
  typeof RankSemana.prototype.id,
  RankSemanaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RankSemana, dataSource);
  }
}
