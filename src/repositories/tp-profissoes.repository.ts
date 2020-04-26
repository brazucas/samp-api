import {DefaultCrudRepository} from '@loopback/repository';
import {TpProfissoes, TpProfissoesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TpProfissoesRepository extends DefaultCrudRepository<
  TpProfissoes,
  typeof TpProfissoes.prototype.id,
  TpProfissoesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TpProfissoes, dataSource);
  }
}
