import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'jornal'}}})
export class Jornal extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Redator', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  redator?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Linha1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  linha1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Linha2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  linha2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Linha3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  linha3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Linha4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  linha4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Linha5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  linha5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Linha6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  linha6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Publicado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  publicado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'L1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  l1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'L2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  l2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'L3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  l3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'L4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  l4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'L5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  l5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'L6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  l6?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Jornal>) {
    super(data);
  }
}

export interface JornalRelations {
  // describe navigational properties here
}

export type JornalWithRelations = Jornal & JornalRelations;
