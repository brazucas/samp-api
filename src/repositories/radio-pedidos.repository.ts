import {DefaultCrudRepository} from '@loopback/repository';
import {RadioPedidos, RadioPedidosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RadioPedidosRepository extends DefaultCrudRepository<
  RadioPedidos,
  typeof RadioPedidos.prototype.id,
  RadioPedidosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RadioPedidos, dataSource);
  }
}
