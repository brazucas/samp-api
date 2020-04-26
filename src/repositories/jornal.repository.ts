import {DefaultCrudRepository} from '@loopback/repository';
import {Jornal, JornalRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class JornalRepository extends DefaultCrudRepository<
  Jornal,
  typeof Jornal.prototype.id,
  JornalRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Jornal, dataSource);
  }
}
