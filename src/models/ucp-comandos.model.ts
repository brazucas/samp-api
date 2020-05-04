import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'UCP_COMANDOS'}}
})
export class UcpComandos extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id?: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'NICK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nick?: string;

  @property({
    type: 'string',
    length: 500,
    mysql: {columnName: 'COMANDO', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  comando?: string;

  @property({
    type: 'string',
    length: 5000,
    mysql: {columnName: 'RESPOSTA', dataType: 'varchar', dataLength: 5000, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  resposta?: string;

  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'HORA_ENVIADO', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  horaEnviado?: string;

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
    mysql: {columnName: 'CONFERIDO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  conferido?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'EXECUTAR_EM', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  executarEm?: number;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'REFERENCIA', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  referencia?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UcpComandos>) {
    super(data);
  }
}

export interface UcpComandosRelations {
  // describe navigational properties here
}

export type UcpComandosWithRelations = UcpComandos & UcpComandosRelations;
