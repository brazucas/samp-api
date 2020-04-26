import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'impostos'}}})
export class Impostos extends Entity {
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
    mysql: {columnName: 'DiaDoIPTU', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  diaDoIptu?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DiaDoSeguro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  diaDoSeguro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DiaDoPlanoDeSaude', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  diaDoPlanoDeSaude?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DiaDoEmprestimo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  diaDoEmprestimo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DiaDoCartao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  diaDoCartao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DiaDoIPVA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  diaDoIpva?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DiaDoIR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  diaDoIr?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HoraDoIR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  horaDoIr?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HoraDoIPTU', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  horaDoIptu?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HoraDoSeguro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  horaDoSeguro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HoraDoPlanoDeSaude', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  horaDoPlanoDeSaude?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HoraDoEmprestimo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  horaDoEmprestimo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HoraDoCartao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  horaDoCartao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HoraDoIPVA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  horaDoIpva?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'IPVA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ipva?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'IPTU', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  iptu?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'IR_PJ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  irPj?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'IR_PF', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  irPf?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SEGURO_VEICULOS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  seguroVeiculos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SEGURO_PROPRIEDADES', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  seguroPropriedades?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PLANO_DE_SAUDE', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planoDeSaude?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TRATAMENTO_MEDICO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tratamentoMedico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TARIFA_AUTOTAXI', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tarifaAutotaxi?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TARIFA_DEPOSITO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tarifaDeposito?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CARTAO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cartao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MULTAS_TRANSITO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  multasTransito?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TAXA_HOTEL', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  taxaHotel?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PREMIO_PARK', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  premioPark?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'EXTRA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  extra?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'LICENSA_TAXI', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  licensaTaxi?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HoraDoImposto', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  horaDoImposto?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Impostos>) {
    super(data);
  }
}

export interface ImpostosRelations {
  // describe navigational properties here
}

export type ImpostosWithRelations = Impostos & ImpostosRelations;
