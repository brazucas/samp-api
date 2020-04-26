import {DefaultCrudRepository} from '@loopback/repository';
import {RlFutebol, RlFutebolRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RlFutebolRepository extends DefaultCrudRepository<
  RlFutebol,
  typeof RlFutebol.prototype.id,
  RlFutebolRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RlFutebol, dataSource);
  }
}
