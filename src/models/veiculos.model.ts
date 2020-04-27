import { Entity, model, property } from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'veiculos'}}})
export class Veiculos extends Entity {
  static variaveisPublicas = [
    "__UID", "placa", "especial", "sx", "sy", "sz", "sa", "propriedade", "dono", "modelo", "cor1", "cor2", "valor", "valorOriginal"
  ];

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
    mysql: {columnName: 'PLACA', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  placa: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {
      columnName: 'ULTIMA_ATUALIZACAO',
      dataType: 'int',
      dataLength: null,
      dataPrecision: 10,
      dataScale: 0,
      nullable: 'Y'
    },
  })
  ultimaAtualizacao?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'propriedade',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  propriedade?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'dono',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  dono?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'modelo',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  modelo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'sx', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sx?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'sy', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sy?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'sz', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'sa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sa?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'cor1', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  cor1?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'cor2', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  cor2?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp1', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp1?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp2', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp2?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp3', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp3?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp4', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp4?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp5', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp5?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp6', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp6?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp7', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp7?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp8', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp8?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp9', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp9?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp10', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp10?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp11', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp11?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp12', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp12?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp13', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp13?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp14', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp14?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp15', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp15?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp16', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp16?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comp17', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comp17?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'grafite', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  grafite?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Gasolina', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  gasolina?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Oleo', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  oleo?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Radiador', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  radiador?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'valor', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  valor?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {
      columnName: 'ValorOriginal',
      dataType: 'int',
      dataLength: null,
      dataPrecision: 10,
      dataScale: 0,
      nullable: 'Y'
    },
  })
  valorOriginal?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Especial',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  especial?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Compressor',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compressor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'VeiculoTrancado',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  veiculoTrancado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Quilometragem',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  quilometragem?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Bateria',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  bateria?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'GasTanque',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  gasTanque?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'TurboTempo',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  turboTempo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Pneu0',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  pneu0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Pneu1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  pneu1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Pneu2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  pneu2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Pneu3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  pneu3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Interior',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  interior?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'VirtualWorld',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  virtualWorld?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'sirene_coord0',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  sireneCoord0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'sirene_coord1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  sireneCoord1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'sirene_coord2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  sireneCoord2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'sirene_coord3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  sireneCoord3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'sirene_coord4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  sireneCoord4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'sirene_coord5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  sireneCoord5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Sirene',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  sirene?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Blindagem',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  blindagem?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Piloto',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  piloto?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Chave1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  chave1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'VeiculoDaPropriedade',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  veiculoDaPropriedade?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'CDPlayer',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  cdPlayer?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'TravaAutomatica',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  travaAutomatica?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Alarme',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  alarme?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'SistemaAntiFurto',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  sistemaAntiFurto?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Seguro',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  seguro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Rastreador',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  rastreador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Turbo',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  turbo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Limitador',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  limitador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'ABS',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  abs?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'GPS',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  gps?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'PlacaPersonalizada',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  placaPersonalizada?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex2_0',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex2_0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex2_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex2_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex2_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex2_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex2_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex2_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex2_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex2_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex2_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex2_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex1_0',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex1_0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex1_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex1_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex1_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex1_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex1_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex1_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex1_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex1_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex1_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex1_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex0',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex0_0',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex0_0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex0_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex0_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex0_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex0_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex0_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex0_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex0_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex0_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex0_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex0_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Multas',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  multas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'LicensaTaxi',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  licensaTaxi?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Chave2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  chave2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Chave3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  chave3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Arma_Slot_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  armaSlot_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Balas_Slot_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  balasSlot_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Estepes',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  estepes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'comp0',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  comp0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex3_0',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex3_0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex3_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex3_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex3_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex3_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex3_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex3_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex3_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex3_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex3_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex3_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex4_0',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex4_0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex4_1',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex4_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex4_2',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex4_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex4_3',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex4_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex4_4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex4_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex4_5',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex4_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'compex4',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  compex4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon1X',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon1X?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon1Y',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon1Y?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon1Z',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon1Z?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon1RX',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon1Rx?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon1RY',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon1Ry?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon1RZ',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon1Rz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon2X',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon2X?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon2Y',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon2Y?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon2Z',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon2Z?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon2RX',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon2Rx?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon2RY',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon2Ry?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'Neon2RZ',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  neon2Rz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'BancoSeguro',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  bancoSeguro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'ApreendidoDETRAN',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  apreendidoDetran?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'sxA',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  sxA?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'syA',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  syA?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'szA',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  szA?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {
      columnName: 'saA',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y'
    },
  })
  saA?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Veiculos>) {
    super(data);
  }
}

export interface VeiculosRelations {
  // describe navigational properties here
}

export type VeiculosWithRelations = Veiculos & VeiculosRelations;
