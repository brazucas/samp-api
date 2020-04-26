import {DefaultCrudRepository} from '@loopback/repository';
import {TpArmas, TpArmasRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TpArmasRepository extends DefaultCrudRepository<
  TpArmas,
  typeof TpArmas.prototype.id,
  TpArmasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TpArmas, dataSource);
  }
}
