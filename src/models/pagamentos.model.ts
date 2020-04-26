import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'pagamentos'}}
})
export class Pagamentos extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'NICK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nick: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'METODO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  metodo: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'PRECO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  preco: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'PACOTE', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  pacote: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'XID', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  xid: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'MOEDA', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  moeda: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'STATUS', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  status: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'PAG_ID', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  pagId: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'REG', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  reg: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'CODE', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  code: string;

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

  constructor(data?: Partial<Pagamentos>) {
    super(data);
  }
}

export interface PagamentosRelations {
  // describe navigational properties here
}

export type PagamentosWithRelations = Pagamentos & PagamentosRelations;
