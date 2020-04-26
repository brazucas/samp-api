import {DefaultCrudRepository} from '@loopback/repository';
import {CompetitivoChat, CompetitivoChatRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompetitivoChatRepository extends DefaultCrudRepository<
  CompetitivoChat,
  typeof CompetitivoChat.prototype.id,
  CompetitivoChatRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CompetitivoChat, dataSource);
  }
}
