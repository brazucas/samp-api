import {DefaultCrudRepository} from '@loopback/repository';
import {VlVeiculoEspeciais, VlVeiculoEspeciaisRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VlVeiculoEspeciaisRepository extends DefaultCrudRepository<
  VlVeiculoEspeciais,
  typeof VlVeiculoEspeciais.prototype.id,
  VlVeiculoEspeciaisRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(VlVeiculoEspeciais, dataSource);
  }
}
