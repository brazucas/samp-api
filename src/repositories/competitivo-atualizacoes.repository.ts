import {DefaultCrudRepository} from '@loopback/repository';
import {CompetitivoAtualizacoes, CompetitivoAtualizacoesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompetitivoAtualizacoesRepository extends DefaultCrudRepository<
  CompetitivoAtualizacoes,
  typeof CompetitivoAtualizacoes.prototype.id,
  CompetitivoAtualizacoesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CompetitivoAtualizacoes, dataSource);
  }
}
