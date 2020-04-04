import { Entity, model, property } from '@loopback/repository';

@model({settings: {strict: false}, name: "contas_rpg"})
export class ContasRpg extends Entity {
  @property({
    type: 'number',
    generated: true,
    required: true,
    id: true,
  })
  _id: string;

  @property({
    type: 'string',
    generated: false,
    required: true,
  })
  __UID: string;

  @property({
    type: 'string',
    generated: false,
    required: true,
  })
  Senha: string;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Sx: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Sy: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Sz: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Sa: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Interior: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  VirtualWorld: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Skin: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  CasaAtiva: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ContaBancaria: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  DinheiroEmMaos: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Profissao: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Estilo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  HT: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  HN: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  HA: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Preso: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Divida: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  NivelDrogas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  NivelAlcool: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  NivelProcurado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Familia: string;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  CPN: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  CPNu: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  CPM: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  CPMu: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  CPB: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Experiencia: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ArmasLicensa: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Mortos: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Painel: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Velocimetro: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TempoPreso: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Marcado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  PlanoDeSaude: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TmpProxMud: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  PodeMalhar: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TempoMalhando: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExperienciaAnterior: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaSalarioRecebido: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s1armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s1balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s2armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s2balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s3armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s3balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s4armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s4balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s5armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s5balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s6armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s6balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s7armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s7balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s8armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s8balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s9armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s9balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s10armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s10balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s11armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s11balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s12armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s12balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s13armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s13balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s14armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s14balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  PropriedadeEmQueTrabalha: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SaudeTotal: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Cor1: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Cor2: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Cor3: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Cor4: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Cor5: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  DataNascimento: string;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Sexo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Camuflagem: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Bloqueada: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  IP: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Impostos: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaIRRecolhido: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaPlanoSaude: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaEmprestimo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaCartao: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Taxas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaTaxaHotel: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  UltimoLogin: string;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  UltimoLoginTs: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Desejo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TempoVerificacao: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Bilhete: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ForcaFisica: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TempoConectado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  NivelBoxe: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  NivelStreet: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  NivelKarate: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  IscasParaPesca: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Fome: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Respeito: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Ui: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Uv: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  UxS: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  UyS: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  UzS: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TempoAcordado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  XpDiaria: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Trabalhos: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  PresoNoDeposito: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Algemado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Atum: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Bagre: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Cavala: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Dourado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Garoupa: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Tainha: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  JogadorAutorizado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s0armas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  s0balas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Colete: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Dinamites: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Flashes: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Teaser: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Fortuna: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ProcuradoEx: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  AssaltoCasa: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Moderador: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Chat: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Entregas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExpDesempregado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  MudouDeFamilia: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  MudouDeProfs: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ProfissaoAnterior: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExpLixeiro: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Celular: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  NumeroCelular: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Infracoes: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Salario: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Gerente: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Chapeu: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Capacete: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Oculos: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Clinica: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ValorVeiculos: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExpVendedorCarros: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Multas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Juros: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Alvo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExpCorretor: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ValorImoveis: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_MP5: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_MICRO_UZI: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_DESERT_EAGLE: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_SPAS12_SHOTGUN: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_M4: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Laptop: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExpMotoristaPub: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  NivelPesca: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  VezesPreso: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TempoPena: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TempoPenaTotal: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Assaltante: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Julgado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaEmpregado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  PodeMarcar: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExpInvestigador: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SalarioDisponivel: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ParticipMGS: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Terrorista: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExpVendedorArmas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Creditos: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuEmprestimo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuSeguro: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuTaxaHotel: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  DiariasProp: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  AcumuladoProp: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuIR: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuCartao: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuDeposito: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuIPVA: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuIPTU: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuPlanoSaude: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  DoenteTipo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  DoenteTempo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaDeposito: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  VitimasDM: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  BilheteSimples1: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  BilheteSimples2: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  BilheteEspecial1: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  BilheteEspecial2: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  BilheteEspecial3: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  BilheteEspecial4: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Sede: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Quentinhas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Garrafas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SaudeSalva: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Maconha: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Crack: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Cocaina: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Anabolizante: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Arrebite: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Drogado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  DrogadoQtdade: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Drogas: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  GanhoDiario: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TrabalhouRecentemente: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  LimiteBancoTempo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  LimiteBancoDeposito: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  QtdadeDepositos: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaVacina: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  MembroAtivo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Previdencia: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExpTotalPub: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  LimiteBancoSaque: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  USMembroAtivo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  AtingidoRecentemente: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  MarcadoAleatorioQtdade: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  MarcadoAleatorio: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  OffLevelFamilia: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TempoLiberarDM: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaPoupanca: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  RecebeuPoupanca: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  DiaDoGanhoDiario: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  GanhoDiarioDomingo: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  GanhoDiarioSegunda: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  GanhoDiarioTerca: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  GanhoDiarioQuarta: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  GanhoDiarioQuinta: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  GanhoDiarioSexta: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  SemanaDoGanhoDiario: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  ExpMecanico: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  TempoLiberarProcurado: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  DeslogouTS: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  MarcadoDM: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_PISTOL: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_SHOTGUN: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_SAWNOFF_SHOTGUN: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_AK47: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  WEAPONSKILL_SNIPERRIFLE: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Ferido: number;

  @property({
    type: 'string',
    generated: false,
    required: false,
  })
  Inativo: number;


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
