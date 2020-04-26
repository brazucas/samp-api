import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'RPG_FAMILIAS'}}
})
export class RpgFamilias extends Entity {
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
    length: 15,
    mysql: {columnName: 'NM_FAMILIA', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nmFamilia?: string;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'DONO_FAMILIA', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  donoFamilia: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'MEMBROS_TOTAIS', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  membrosTotais?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'MEMBROS_INATIVOS', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  membrosInativos?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'BANCO_SALDO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  bancoSaldo?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'PONTOS_SEMANA', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  pontosSemana?: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'PONTOS_TOTAL', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pontosTotal?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'SLOTS', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  slots?: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'RECRUTADOR', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  recrutador?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'TS_REGISTRO_CRIADO', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tsRegistroCriado?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RpgFamilias>) {
    super(data);
  }
}

export interface RpgFamiliasRelations {
  // describe navigational properties here
}

export type RpgFamiliasWithRelations = RpgFamilias & RpgFamiliasRelations;
