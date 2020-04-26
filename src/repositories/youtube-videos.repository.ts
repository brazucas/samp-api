import {DefaultCrudRepository} from '@loopback/repository';
import {YoutubeVideos, YoutubeVideosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class YoutubeVideosRepository extends DefaultCrudRepository<
  YoutubeVideos,
  typeof YoutubeVideos.prototype.id,
  YoutubeVideosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(YoutubeVideos, dataSource);
  }
}
