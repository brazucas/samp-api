import {DefaultCrudRepository} from '@loopback/repository';
import {Mochilas, MochilasRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MochilasRepository extends DefaultCrudRepository<
  Mochilas,
  typeof Mochilas.prototype.id,
  MochilasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Mochilas, dataSource);
  }
}
