import {DefaultCrudRepository} from '@loopback/repository';
import {EmailsEnviados, EmailsEnviadosRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmailsEnviadosRepository extends DefaultCrudRepository<
  EmailsEnviados,
  typeof EmailsEnviados.prototype.id,
  EmailsEnviadosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(EmailsEnviados, dataSource);
  }
}
