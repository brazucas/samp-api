import {DefaultCrudRepository} from '@loopback/repository';
import {RpgFamilias, RpgFamiliasRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RpgFamiliasRepository extends DefaultCrudRepository<
  RpgFamilias,
  typeof RpgFamilias.prototype.id,
  RpgFamiliasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RpgFamilias, dataSource);
  }
}
