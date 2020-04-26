import {DefaultCrudRepository} from '@loopback/repository';
import {TpReputacaoComandos, TpReputacaoComandosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TpReputacaoComandosRepository extends DefaultCrudRepository<
  TpReputacaoComandos,
  typeof TpReputacaoComandos.prototype.id,
  TpReputacaoComandosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TpReputacaoComandos, dataSource);
  }
}
