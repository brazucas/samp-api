import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'banners'}}})
export class Banners extends Entity {
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
    required: true,
    length: 45,
    mysql: {columnName: 'AUTOR', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  autor: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'APROVADO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  aprovado: number;

  @property({
    type: 'string',
    required: true,
    length: 35,
    mysql: {columnName: 'MD5', dataType: 'varchar', dataLength: 35, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  md5: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'DATA', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  data: number;

  @property({
    type: 'string',
    required: true,
    length: 150,
    mysql: {columnName: 'ARQUIVO', dataType: 'varchar', dataLength: 150, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  arquivo: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'TIMESTAMP', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  timestamp: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Banners>) {
    super(data);
  }
}

export interface BannersRelations {
  // describe navigational properties here
}

export type BannersWithRelations = Banners & BannersRelations;
