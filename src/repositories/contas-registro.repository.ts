import {DefaultCrudRepository} from '@loopback/repository';
import {ContasRegistro, ContasRegistroRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ContasRegistroRepository extends DefaultCrudRepository<
  ContasRegistro,
  typeof ContasRegistro.prototype.id,
  ContasRegistroRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ContasRegistro, dataSource);
  }
}
