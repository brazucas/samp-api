import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'mensagens'}}
})
export class Mensagens extends Entity {
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
    mysql: {columnName: 'TIPO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  tipo: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'DE', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  de: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'PARA', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  para: string;

  @property({
    type: 'string',
    required: true,
    length: 80,
    mysql: {columnName: 'TITULO', dataType: 'varchar', dataLength: 80, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  titulo: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'LIDO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  lido: number;

  @property({
    type: 'string',
    required: true,
    length: 800,
    mysql: {columnName: 'TEXTO', dataType: 'varchar', dataLength: 800, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  texto: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'HORA', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  hora: number;

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

  constructor(data?: Partial<Mensagens>) {
    super(data);
  }
}

export interface MensagensRelations {
  // describe navigational properties here
}

export type MensagensWithRelations = Mensagens & MensagensRelations;
