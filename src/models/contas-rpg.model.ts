import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'contas_rpg'}}
})
export class ContasRpg extends Entity {
  static variaveisPublicas = [
    "__UID", "skin", "profissao", "estilo", "familia", "experiencia", "mortos", "saudeTotal",
    "dataNascimento", "sexo", "ultimoLogin", "tempoConectado", "inativo", "moderador", "banido", "vezesPreso"
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
    type: 'date',
    mysql: {columnName: 'ULTIMA_ATUALIZACAO', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ultimaAtualizacao?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TRAVADO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  travado?: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'NICK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nick: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Administrador', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  administrador?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'IP', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ip?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'CONVITE', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  convite?: string;

  @property({
    type: 'string',
    length: 40,
    mysql: {columnName: 'PAGINA_ATUAL', dataType: 'varchar', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  paginaAtual?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TENTATIVAS_LOGIN', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  tentativasLogin?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ÿSenha', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  senha?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'EMAIL', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  email?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'VEICULOS_ENCOMENDADOS', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  veiculosEncomendados?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'EXCLUIR_CONTA', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  excluirConta?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'EXCLUIR_CONTA_TEMPO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  excluirContaTempo?: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'FORUM_USER', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  forumUser?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'FORUM_SENHA', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  forumSenha?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'FORUM_ATIVO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  forumAtivo?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Sx', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sx?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Sy', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sy?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Sz', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Sa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Interior', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  interior?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'VirtualWorld', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  virtualWorld?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Skin', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  skin?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CasaAtiva', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  casaAtiva?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ContaBancaria', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  contaBancaria?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'DinheiroEmMaos', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  dinheiroEmMaos?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Profissao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  profissao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Estilo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  estilo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HT', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ht?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HN', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  hn?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ha?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Preso', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  preso?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Divida', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  divida?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NivelDrogas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nivelDrogas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NivelAlcool', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nivelAlcool?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NivelProcurado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nivelProcurado?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Familia', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  familia?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CPN', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cpn?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CPNu', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cpNu?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CPM', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cpm?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CPMu', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cpMu?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CPB', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cpb?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Experiencia', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  experiencia?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ArmasLicensa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  armasLicensa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Mortos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mortos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Painel', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  painel?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Velocimetro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  velocimetro?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TempoPreso', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  tempoPreso?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Marcado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  marcado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PlanoDeSaude', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planoDeSaude?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TmpProxMud', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tmpProxMud?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PodeMalhar', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  podeMalhar?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempoMalhando', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempoMalhando?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExperienciaAnterior', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  experienciaAnterior?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SemanaSalarioRecebido', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  semanaSalarioRecebido?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's1armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s1armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's1balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s1balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's2armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s2armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's2balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s2balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's3armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s3armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's3balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s3balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's4armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s4armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's4balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s4balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's5armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s5armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's5balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s5balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's6armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s6armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's6balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s6balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's7armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s7armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's7balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s7balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's8armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s8armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's8balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s8balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's9armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s9armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's9balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s9balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's10armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s10armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's10balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s10balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's11armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s11armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's11balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s11balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's12armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s12armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's12balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s12balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's13armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s13armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's13balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s13balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's14armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s14armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's14balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s14balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PropriedadeEmQueTrabalha', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  propriedadeEmQueTrabalha?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'SaudeTotal', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  saudeTotal?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Cor1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cor1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Cor2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cor2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Cor3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cor3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Cor4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cor4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Cor5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cor5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DataNascimento', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dataNascimento?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Sexo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sexo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Bloqueada', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  bloqueada?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Impostos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  impostos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SemanaIRRecolhido', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  semanaIrRecolhido?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SemanaPlanoSaude', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  semanaPlanoSaude?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SemanaEmprestimo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  semanaEmprestimo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SemanaCartao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  semanaCartao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Taxas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  taxas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SemanaTaxaHotel', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  semanaTaxaHotel?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UltimoLogin', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ultimoLogin?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempoVerificacao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempoVerificacao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Bilhete', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  bilhete?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ForcaFisica', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  forcaFisica?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TempoConectado', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  tempoConectado?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NivelBoxe', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nivelBoxe?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NivelStreet', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nivelStreet?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NivelKarate', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nivelKarate?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'IscasParaPesca', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  iscasParaPesca?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Fome', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fome?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Respeito', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  respeito?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Ui', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ui?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Uv', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  uv?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UxS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  uxS?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UyS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  uyS?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UzS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  uzS?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempoAcordado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempoAcordado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Camuflagem', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  camuflagem?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'XpDiaria', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  xpDiaria?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Algemado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  algemado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Atum', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  atum?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Bagre', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  bagre?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Cavala', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cavala?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Dourado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dourado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Garoupa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  garoupa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Tainha', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tainha?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'JogadorAutorizado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  jogadorAutorizado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's0armas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s0armas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 's0balas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  s0balas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Colete', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  colete?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Dinamites', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dinamites?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Flashes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  flashes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Teaser', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  teaser?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Fortuna', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  fortuna?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ProcuradoEx', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  procuradoEx?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Desejo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  desejo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ProfissaoAnterior', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  profissaoAnterior?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Alvo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  alvo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Andar', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  andar?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Salario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  salario?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MudouDeProfs', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mudouDeProfs?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Gerente', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  gerente?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Juros', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  juros?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Creditos', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  creditos?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Celular', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  celular?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NumeroCelular', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  numeroCelular?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Chat', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chat?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CelularCapa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  celularCapa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Multas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  multas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Balao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  balao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempoPena', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempoPena?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempoPenaTotal', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempoPenaTotal?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Julgado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  julgado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Chapeu', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeu?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Mascara', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascara?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Oculos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Capacete', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  capacete?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UsandoChapeu', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  usandoChapeu?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UsandoOculos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  usandoOculos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UsandoMascara', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  usandoMascara?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'OculosOffsetX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculosOffsetX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'OculosOffsetY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculosOffsetY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'OculosOffsetZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculosOffsetZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'OculosRotX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculosRotX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'OculosRotY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculosRotY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'OculosRotZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculosRotZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'OculosScaleX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculosScaleX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'OculosScaleY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculosScaleY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'OculosScaleZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oculosScaleZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ChapeuOffsetX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeuOffsetX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ChapeuOffsetY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeuOffsetY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ChapeuOffsetZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeuOffsetZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ChapeuRotX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeuRotX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ChapeuRotY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeuRotY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ChapeuRotZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeuRotZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ChapeuScaleX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeuScaleX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ChapeuScaleY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeuScaleY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ChapeuScaleZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  chapeuScaleZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MascaraOffsetX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascaraOffsetX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MascaraOffsetY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascaraOffsetY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MascaraOffsetZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascaraOffsetZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MascaraRotX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascaraRotX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MascaraRotY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascaraRotY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MascaraRotZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascaraRotZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MascaraScaleX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascaraScaleX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MascaraScaleY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascaraScaleY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MascaraScaleZ', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mascaraScaleZ?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NivelPesca', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nivelPesca?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Infracoes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  infracoes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpPolicialFederal', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expPolicialFederal?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpAdvogado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expAdvogado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Assaltante', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  assaltante?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'VezesPreso', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  vezesPreso?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DataMorte', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dataMorte?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Morto', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  morto?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpMecanico', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expMecanico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorImoveis', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorImoveis?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ValorVeiculos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valorVeiculos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpCaminhoneiro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expCaminhoneiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Hotel', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  hotel?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MudouDeFamilia', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mudouDeFamilia?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Entregas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  entregas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Moderador', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  moderador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Clinica', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  clinica?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Patins', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  patins?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Mudo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mudo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Banido', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  banido?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MotivoBan', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  motivoBan?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'IPBanido', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ipBanido?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Laptop', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  laptop?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'VaraDePesca', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  varaDePesca?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_MICRO_UZI', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillMicroUzi?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_SHOTGUN', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillShotgun?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_DESERT_EAGLE', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillDesertEagle?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_M4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillM4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_PISTOL_SILENCED', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillPistolSilenced?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_MP5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillMp5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Advertencias', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  advertencias?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Transparencia', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  transparencia?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_PISTOL', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillPistol?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Relogio', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  relogio?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Aplicacoes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  aplicacoes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpJornalista', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expJornalista?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_SPAS12_SHOTGUN', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillSpas12Shotgun?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Herdeiro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  herdeiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpHacker', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expHacker?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SalarioDisponivel', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  salarioDisponivel?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempoDesmanche', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempoDesmanche?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Terrorista', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  terrorista?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpTraficante', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expTraficante?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpAssassino', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expAssassino?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PresoNoDeposito', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  presoNoDeposito?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpInvestigador', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expInvestigador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Fake', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fake?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_SAWNOFF_SHOTGUN', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillSawnoffShotgun?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_AK47', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillAk47?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'WEAPONSKILL_SNIPERRIFLE', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  weaponskillSniperrifle?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PodeMarcar', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  podeMarcar?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpAgricultor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expAgricultor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpPolicialCivil', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expPolicialCivil?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'M4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  m4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PericiaM4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  periciaM4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PericiaMP5', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  periciaMp5?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TransparenciaV', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  transparenciaV?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CartaoDebito', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cartaoDebito?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'BancoCartao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  bancoCartao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Saude', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  saude?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Trabalhos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trabalhos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpEnfermeiro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expEnfermeiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'HDFile', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  hdFile?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Garra', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  garra?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Admin', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  admin?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'SemanaEmpregado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  semanaEmpregado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Dividas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dividas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExperienciaCorregedoria', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  experienciaCorregedoria?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Casamento', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  casamento?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'EstadoCivil', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  estadoCivil?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExperienciaMafia', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  experienciaMafia?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Fiancavel', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fiancavel?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpMotoristaPub', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expMotoristaPub?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpJuiz', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expJuiz?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpDesempregado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expDesempregado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpTaxista', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expTaxista?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpDetran', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expDetran?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpPiloto', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expPiloto?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpCoveiro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expCoveiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpPizzaboy', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expPizzaboy?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpPrefeito', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expPrefeito?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpLixeiro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expLixeiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpCamelo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expCamelo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpSeguranca', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expSeguranca?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpFrentista', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expFrentista?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpBancario', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expBancario?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpInstrutor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expInstrutor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpMotoristaPart', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expMotoristaPart?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpBombeiro', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expBombeiro?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpPromoter', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expPromoter?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'UltimoLoginTs', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ultimoLoginTs?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ForçaFisica', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  forAFisica?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpVendedorArmas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expVendedorArmas?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'WC_BLOQUEADO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  wcBloqueado?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ExpVendedorCarros', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expVendedorCarros?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Moderacao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  moderacao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Saúde', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  saDe?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ToqueCelular', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  toqueCelular?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'NOME', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nome?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'DJ', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  dj?: number;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CriouFamilia', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  criouFamilia?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'BanidoPor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  banidoPor?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ContasRpg>) {
    super(data);
  }
}

export interface ContasRpgRelations {
  // describe navigational properties here
}

export type ContasRpgWithRelations = ContasRpg & ContasRpgRelations;
