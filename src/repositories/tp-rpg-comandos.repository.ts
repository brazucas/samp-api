import {DefaultCrudRepository} from '@loopback/repository';
import {TpRpgComandos, TpRpgComandosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TpRpgComandosRepository extends DefaultCrudRepository<
  TpRpgComandos,
  typeof TpRpgComandos.prototype.id,
  TpRpgComandosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TpRpgComandos, dataSource);
  }
}
