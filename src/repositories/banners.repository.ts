import {DefaultCrudRepository} from '@loopback/repository';
import {Banners, BannersRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BannersRepository extends DefaultCrudRepository<
  Banners,
  typeof Banners.prototype.id,
  BannersRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Banners, dataSource);
  }
}
