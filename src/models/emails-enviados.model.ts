import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'emails_enviados'}}
})
export class EmailsEnviados extends Entity {
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
    mysql: {columnName: 'CODIGO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  codigo: string;

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
    length: 4294967295,
    mysql: {columnName: 'CORPO', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  corpo: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'TS_ENVIADO', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tsEnviado: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EmailsEnviados>) {
    super(data);
  }
}

export interface EmailsEnviadosRelations {
  // describe navigational properties here
}

export type EmailsEnviadosWithRelations = EmailsEnviados & EmailsEnviadosRelations;
