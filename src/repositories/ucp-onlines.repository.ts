import {DefaultCrudRepository} from '@loopback/repository';
import {UcpOnlines, UcpOnlinesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UcpOnlinesRepository extends DefaultCrudRepository<
  UcpOnlines,
  typeof UcpOnlines.prototype.id,
  UcpOnlinesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(UcpOnlines, dataSource);
  }
}
