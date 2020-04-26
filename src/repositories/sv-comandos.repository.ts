import {DefaultCrudRepository} from '@loopback/repository';
import {SvComandos, SvComandosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SvComandosRepository extends DefaultCrudRepository<
  SvComandos,
  typeof SvComandos.prototype.id,
  SvComandosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(SvComandos, dataSource);
  }
}
