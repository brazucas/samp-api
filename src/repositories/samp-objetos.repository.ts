import {DefaultCrudRepository} from '@loopback/repository';
import {SampObjetos, SampObjetosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SampObjetosRepository extends DefaultCrudRepository<
  SampObjetos,
  typeof SampObjetos.prototype.id,
  SampObjetosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(SampObjetos, dataSource);
  }
}
