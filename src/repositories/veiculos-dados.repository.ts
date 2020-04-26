import {DefaultCrudRepository} from '@loopback/repository';
import {VeiculosDados, VeiculosDadosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VeiculosDadosRepository extends DefaultCrudRepository<
  VeiculosDados,
  typeof VeiculosDados.prototype.id,
  VeiculosDadosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(VeiculosDados, dataSource);
  }
}
