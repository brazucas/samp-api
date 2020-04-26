import {DefaultCrudRepository} from '@loopback/repository';
import {TpDesejos, TpDesejosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TpDesejosRepository extends DefaultCrudRepository<
  TpDesejos,
  typeof TpDesejos.prototype.id,
  TpDesejosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TpDesejos, dataSource);
  }
}
