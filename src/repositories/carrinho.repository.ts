import {DefaultCrudRepository} from '@loopback/repository';
import {Carrinho, CarrinhoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CarrinhoRepository extends DefaultCrudRepository<
  Carrinho,
  typeof Carrinho.prototype.id,
  CarrinhoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Carrinho, dataSource);
  }
}
