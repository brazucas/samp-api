import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'minigames'}}
})
export class Minigames extends Entity {
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
    mysql: {columnName: 'MiniGame', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGame?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Partidas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  partidas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameAtual', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameAtual?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_85', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_85?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_36', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_36?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_75', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_75?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_24', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_24?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_41', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_41?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_81', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_81?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_92', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_92?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_32', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_32?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_31', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_31?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_34', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_34?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_68', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_68?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_88', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_88?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_46', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_46?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_43', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_43?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_80', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_80?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_44', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_44?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_55', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_55?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_100', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_100?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_42', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_42?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_30', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_30?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_64', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_64?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayListOwner', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playListOwner?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayList10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playList10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Sequencia', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sequencia?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlayListTrack', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playListTrack?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_71', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_71?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_53', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_53?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_17', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_17?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_74', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_74?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_101', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_101?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_86', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_86?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_23', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_23?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_60', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_60?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_25', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_25?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_59', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_59?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_50', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_50?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_77', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_77?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_14', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_14?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_35', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_35?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_37', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_37?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_61', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_61?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_28', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_28?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_16', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_16?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_94', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_94?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_82', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_82?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_97', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_97?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_98', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_98?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_66', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_66?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_72', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_72?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_78', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_78?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_18', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_18?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_22', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_22?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_96', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_96?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_93', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_93?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_19', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_19?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_58', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_58?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_83', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_83?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_51', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_51?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_95', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_95?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_65', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_65?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_67', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_67?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_27', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_27?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_39', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_39?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_63', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_63?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_45', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_45?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_70', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_70?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_38', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_38?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_47', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_47?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_89', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_89?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_20', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_20?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_87', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_87?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_54', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_54?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_69', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_69?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_11', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_11?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_13', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_13?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_49', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_49?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_48', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_48?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_52', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_52?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_56', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_56?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_79', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_79?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_33', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_33?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_84', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_84?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_90', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_90?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_15', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_15?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_73', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_73?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_91', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_91?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_99', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_99?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_29', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_29?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_62', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_62?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_21', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_21?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_26', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_26?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_40', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_40?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_57', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_57?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_12', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_12?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_76', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_76?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DuroNaQueda0', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  duroNaQueda0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DuroNaQueda1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  duroNaQueda1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DuroNaQueda2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  duroNaQueda2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DuroNaQueda3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  duroNaQueda3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DuroNaQueda4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  duroNaQueda4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Shotsync', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  shotsync?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_102', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_102?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Automacao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  automacao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'AutomacaoHr', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  automacaoHr?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_103', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_103?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HoldWeapons', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  holdWeapons?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_104', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_104?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_105', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_105?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_106', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_106?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CBug', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cBug?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'lastgmxmusic', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastgmxmusic?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UltimoIDUsado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ultimoIdUsado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente6', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente6?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente7', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente7?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente8', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente8?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente10', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente10?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_107', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_107?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente1_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente1Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente2_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente2Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente3_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente3Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente4_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente4Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente5_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente5Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente6_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente6Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente7_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente7Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente8_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente8Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente9_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente9Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MiniGameRecente10_TT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  miniGameRecente10Tt?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TestMode', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  testMode?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_109', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_109?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_108', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_108?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MGVJ_110', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mgvj_110?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Minigames>) {
    super(data);
  }
}

export interface MinigamesRelations {
  // describe navigational properties here
}

export type MinigamesWithRelations = Minigames & MinigamesRelations;
