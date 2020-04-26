import {DefaultCrudRepository} from '@loopback/repository';
import {TpPropriedades, TpPropriedadesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TpPropriedadesRepository extends DefaultCrudRepository<
  TpPropriedades,
  typeof TpPropriedades.prototype.id,
  TpPropriedadesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TpPropriedades, dataSource);
  }
}
