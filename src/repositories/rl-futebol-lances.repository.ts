import {DefaultCrudRepository} from '@loopback/repository';
import {RlFutebolLances, RlFutebolLancesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RlFutebolLancesRepository extends DefaultCrudRepository<
  RlFutebolLances,
  typeof RlFutebolLances.prototype.id,
  RlFutebolLancesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RlFutebolLances, dataSource);
  }
}
