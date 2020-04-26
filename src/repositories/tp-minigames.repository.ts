import {DefaultCrudRepository} from '@loopback/repository';
import {TpMinigames, TpMinigamesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TpMinigamesRepository extends DefaultCrudRepository<
  TpMinigames,
  typeof TpMinigames.prototype.id,
  TpMinigamesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TpMinigames, dataSource);
  }
}
