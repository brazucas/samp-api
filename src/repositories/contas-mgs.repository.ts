import {DefaultCrudRepository} from '@loopback/repository';
import {ContasMgs, ContasMgsRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ContasMgsRepository extends DefaultCrudRepository<
  ContasMgs,
  typeof ContasMgs.prototype.___UID,
  ContasMgsRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ContasMgs, dataSource);
  }
}
