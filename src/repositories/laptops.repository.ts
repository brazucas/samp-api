import {DefaultCrudRepository} from '@loopback/repository';
import {Laptops, LaptopsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LaptopsRepository extends DefaultCrudRepository<
  Laptops,
  typeof Laptops.prototype.id,
  LaptopsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Laptops, dataSource);
  }
}
