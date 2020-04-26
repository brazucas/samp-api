import {DefaultCrudRepository} from '@loopback/repository';
import {PaginasCarregamento, PaginasCarregamentoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PaginasCarregamentoRepository extends DefaultCrudRepository<
  PaginasCarregamento,
  typeof PaginasCarregamento.prototype.id,
  PaginasCarregamentoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(PaginasCarregamento, dataSource);
  }
}
