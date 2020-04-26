import {DefaultCrudRepository} from '@loopback/repository';
import {Pagamentos, PagamentosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PagamentosRepository extends DefaultCrudRepository<
  Pagamentos,
  typeof Pagamentos.prototype.id,
  PagamentosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Pagamentos, dataSource);
  }
}
