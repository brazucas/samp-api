import {DefaultCrudRepository} from '@loopback/repository';
import {Hashs, HashsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HashsRepository extends DefaultCrudRepository<
  Hashs,
  typeof Hashs.prototype.id,
  HashsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Hashs, dataSource);
  }
}
