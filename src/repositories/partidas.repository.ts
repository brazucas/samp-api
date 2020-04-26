import {DefaultCrudRepository} from '@loopback/repository';
import {Partidas, PartidasRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PartidasRepository extends DefaultCrudRepository<
  Partidas,
  typeof Partidas.prototype.id,
  PartidasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Partidas, dataSource);
  }
}
