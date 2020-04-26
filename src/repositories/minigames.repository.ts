import {DefaultCrudRepository} from '@loopback/repository';
import {Minigames, MinigamesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MinigamesRepository extends DefaultCrudRepository<
  Minigames,
  typeof Minigames.prototype.id,
  MinigamesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Minigames, dataSource);
  }
}
