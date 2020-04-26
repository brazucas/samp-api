import {DefaultCrudRepository} from '@loopback/repository';
import {Proprietarios, ProprietariosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProprietariosRepository extends DefaultCrudRepository<
  Proprietarios,
  typeof Proprietarios.prototype.id,
  ProprietariosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Proprietarios, dataSource);
  }
}
