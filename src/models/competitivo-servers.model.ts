import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'competitivo_servers'}}
})
export class CompetitivoServers extends Entity {
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
    mysql: {columnName: 'IP', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ip?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'PORTA', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  porta?: number;

  @property({
    type: 'string',
    length: 60,
    mysql: {columnName: 'NOME', dataType: 'varchar', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nome?: string;

  @property({
    type: 'string',
    length: 500,
    mysql: {columnName: 'TIME2_PLAYERS', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  time2Players?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'PARTIDAS_REGISTRADAS', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  partidasRegistradas?: number;

  @property({
    type: 'string',
    length: 3,
    mysql: {columnName: 'PARTIDA_TIPO', dataType: 'varchar', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  partidaTipo?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'CHAVE', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chave?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'UNIX_TIMESTAMP', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  unixTimestamp: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'UPTIME', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  uptime: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'STATUS', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  status?: number;

  @property({
    type: 'string',
    length: 500,
    mysql: {columnName: 'TIME1_PLAYERS', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  time1Players?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CompetitivoServers>) {
    super(data);
  }
}

export interface CompetitivoServersRelations {
  // describe navigational properties here
}

export type CompetitivoServersWithRelations = CompetitivoServers & CompetitivoServersRelations;
