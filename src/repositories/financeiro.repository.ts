import {DefaultCrudRepository} from '@loopback/repository';
import {Financeiro, FinanceiroRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FinanceiroRepository extends DefaultCrudRepository<
  Financeiro,
  typeof Financeiro.prototype.id,
  FinanceiroRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Financeiro, dataSource);
  }
}
