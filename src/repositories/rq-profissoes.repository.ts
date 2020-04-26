import {DefaultCrudRepository} from '@loopback/repository';
import {RqProfissoes, RqProfissoesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RqProfissoesRepository extends DefaultCrudRepository<
  RqProfissoes,
  typeof RqProfissoes.prototype.id,
  RqProfissoesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RqProfissoes, dataSource);
  }
}
