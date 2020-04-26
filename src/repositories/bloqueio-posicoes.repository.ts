import {DefaultCrudRepository} from '@loopback/repository';
import {BloqueioPosicoes, BloqueioPosicoesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BloqueioPosicoesRepository extends DefaultCrudRepository<
  BloqueioPosicoes,
  typeof BloqueioPosicoes.prototype.id,
  BloqueioPosicoesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(BloqueioPosicoes, dataSource);
  }
}
