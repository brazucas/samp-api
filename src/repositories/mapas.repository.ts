import {DefaultCrudRepository} from '@loopback/repository';
import {Mapas, MapasRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MapasRepository extends DefaultCrudRepository<
  Mapas,
  typeof Mapas.prototype.id,
  MapasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Mapas, dataSource);
  }
}
