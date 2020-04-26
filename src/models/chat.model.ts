import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'chat'}}})
export class Chat extends Entity {
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
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TIMESTAMP', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  timestamp: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'NICK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nick: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TIPO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  tipo: number;

  @property({
    type: 'string',
    required: true,
    length: 400,
    mysql: {columnName: 'OUTPUT', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  output: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'EXTRA', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'EXTRA1', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra1: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'EXTRA2', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra2: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'EXTRA3', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra3: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'EXTRA4', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra4: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'EXTRA5', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra5: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'EXTRA6', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  extra6: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'HORA', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  hora: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Chat>) {
    super(data);
  }
}

export interface ChatRelations {
  // describe navigational properties here
}

export type ChatWithRelations = Chat & ChatRelations;
