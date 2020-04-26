import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'profissoes'}}
})
export class Profissoes extends Entity {
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
    mysql: {columnName: 'DESEMPREGADO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  desempregado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TAXISTA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  taxista?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'VENDEDOR_CARROS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  vendedorCarros?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CORRETOR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  corretor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ASSASSINO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  assassino?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PROMOTER', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  promoter?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'JUIZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  juiz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SEGURANÇA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  seguranA?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MOTORISTA_PARTICULAR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  motoristaParticular?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'POLICIAL_CIVIL', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  policialCivil?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DETRAN', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  detran?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'POLICIAL_FEDERAL', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  policialFederal?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CAMELO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  camelo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ADVOGADO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  advogado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'INSTRUTOR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  instrutor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'COVEIRO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  coveiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PILOTO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  piloto?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'JORNALISTA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  jornalista?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ENFERMEIRO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  enfermeiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'BOMBEIRO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  bombeiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PIZZABOY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pizzaboy?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TRAFICANTE', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  traficante?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'LIXEIRO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lixeiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'FRENTISTA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  frentista?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'LOCADOR_CARROS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  locadorCarros?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'VENDEDOR_ARMAS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  vendedorArmas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MECANICO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mecanico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'BANCARIO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  bancario?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'INVESTIGADOR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  investigador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MOTORISTA_PUBLICO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  motoristaPublico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HACKER', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  hacker?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CAMINHONEIRO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  caminhoneiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'AGRICULTOR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  agricultor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CORREGEDORIA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  corregedoria?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PREFEITO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  prefeito?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MAFIA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mafia?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Profissoes>) {
    super(data);
  }
}

export interface ProfissoesRelations {
  // describe navigational properties here
}

export type ProfissoesWithRelations = Profissoes & ProfissoesRelations;
