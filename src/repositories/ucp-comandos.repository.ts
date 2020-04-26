import {DefaultCrudRepository} from '@loopback/repository';
import {UcpComandos, UcpComandosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UcpComandosRepository extends DefaultCrudRepository<
  UcpComandos,
  typeof UcpComandos.prototype.id,
  UcpComandosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(UcpComandos, dataSource);
  }
}
