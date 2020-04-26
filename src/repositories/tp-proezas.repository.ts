import {DefaultCrudRepository} from '@loopback/repository';
import {TpProezas, TpProezasRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TpProezasRepository extends DefaultCrudRepository<
  TpProezas,
  typeof TpProezas.prototype.id,
  TpProezasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TpProezas, dataSource);
  }
}
