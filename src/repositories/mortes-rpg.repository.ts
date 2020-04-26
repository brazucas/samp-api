import {DefaultCrudRepository} from '@loopback/repository';
import {MortesRpg, MortesRpgRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MortesRpgRepository extends DefaultCrudRepository<
  MortesRpg,
  typeof MortesRpg.prototype.id,
  MortesRpgRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(MortesRpg, dataSource);
  }
}
