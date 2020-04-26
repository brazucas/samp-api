import {DefaultCrudRepository} from '@loopback/repository';
import {RadioDjs, RadioDjsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RadioDjsRepository extends DefaultCrudRepository<
  RadioDjs,
  typeof RadioDjs.prototype.id,
  RadioDjsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RadioDjs, dataSource);
  }
}
