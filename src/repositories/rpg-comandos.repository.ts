import {DefaultCrudRepository} from '@loopback/repository';
import {RpgComandos, RpgComandosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RpgComandosRepository extends DefaultCrudRepository<
  RpgComandos,
  typeof RpgComandos.prototype.id,
  RpgComandosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RpgComandos, dataSource);
  }
}
