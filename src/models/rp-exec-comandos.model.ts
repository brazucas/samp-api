import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'rp_exec_comandos'}}
})
export class RpExecComandos extends Entity {
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
    mysql: {columnName: 'ID_CMD', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idCmd: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'NM_JOGADOR_EXEC', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nmJogadorExec: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'TS_EXECUTADO', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tsExecutado: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RpExecComandos>) {
    super(data);
  }
}

export interface RpExecComandosRelations {
  // describe navigational properties here
}

export type RpExecComandosWithRelations = RpExecComandos & RpExecComandosRelations;
