import {DefaultCrudRepository} from '@loopback/repository';
import {YoutubeCanais, YoutubeCanaisRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class YoutubeCanaisRepository extends DefaultCrudRepository<
  YoutubeCanais,
  typeof YoutubeCanais.prototype.id,
  YoutubeCanaisRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(YoutubeCanais, dataSource);
  }
}
