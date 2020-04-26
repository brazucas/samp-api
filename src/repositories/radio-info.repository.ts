import {DefaultCrudRepository} from '@loopback/repository';
import {RadioInfo, RadioInfoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RadioInfoRepository extends DefaultCrudRepository<
  RadioInfo,
  typeof RadioInfo.prototype.id,
  RadioInfoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RadioInfo, dataSource);
  }
}
