import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'onebip_info'}}
})
export class OnebipInfo extends Entity {
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
    mysql: {columnName: 'NICK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nick: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'ONEBIP_USER', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  onebipUser: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'ONEBIP_PASS', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  onebipPass: string;

  @property({
    type: 'string',
    required: true,
    length: 15,
    mysql: {columnName: 'ONEBIP_CEL', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  onebipCel: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ONEBIP_OPER', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  onebipOper: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'SID', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  sid: string;

  @property({
    type: 'string',
    required: true,
    length: 400,
    mysql: {columnName: 'LOGIN_COOKIES', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  loginCookies: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'REGISTRADO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  registrado: number;

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

  constructor(data?: Partial<OnebipInfo>) {
    super(data);
  }
}

export interface OnebipInfoRelations {
  // describe navigational properties here
}

export type OnebipInfoWithRelations = OnebipInfo & OnebipInfoRelations;
