import {DefaultCrudRepository} from '@loopback/repository';
import {RpExecComandos, RpExecComandosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RpExecComandosRepository extends DefaultCrudRepository<
  RpExecComandos,
  typeof RpExecComandos.prototype.id,
  RpExecComandosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RpExecComandos, dataSource);
  }
}
