import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'SV_COMANDOS'}}
})
export class SvComandos extends Entity {
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
    mysql: {columnName: 'COMANDO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  comando: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'EXECUTADO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  executado?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'VERIFICADO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  verificado?: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'PARAM1', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  param1?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'PARAM2', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  param2?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'PARAM3', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  param3?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'PARAM4', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  param4?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'PARAM5', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  param5?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'UPTIME', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  uptime?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SvComandos>) {
    super(data);
  }
}

export interface SvComandosRelations {
  // describe navigational properties here
}

export type SvComandosWithRelations = SvComandos & SvComandosRelations;
