import {DefaultCrudRepository} from '@loopback/repository';
import {MortesMgs, MortesMgsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MortesMgsRepository extends DefaultCrudRepository<
  MortesMgs,
  typeof MortesMgs.prototype.id,
  MortesMgsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(MortesMgs, dataSource);
  }
}
