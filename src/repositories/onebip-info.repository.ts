import {DefaultCrudRepository} from '@loopback/repository';
import {OnebipInfo, OnebipInfoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OnebipInfoRepository extends DefaultCrudRepository<
  OnebipInfo,
  typeof OnebipInfo.prototype.id,
  OnebipInfoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(OnebipInfo, dataSource);
  }
}
