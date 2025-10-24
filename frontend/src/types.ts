export type CarroTipo = 'nenhum' | 'compacto' | 'suv'

export interface Ingresso {
  id: number
  nome: string
  preco: number // preço por dia
}

export interface Pacote {
  id: number
  nome: string
  descricao: string
  preco: number
  itens: string[]
  imagem: string
  ingressosDiasDefault?: number
  incluiCarro?: boolean
  incluiIngressos?: boolean
  completa?: boolean
}

export interface TicketSelection {
  id: number
  dias: number
}

export interface Datas {
  ida: string
  volta: string
}

export interface Reserva {
  pacoteId: number
  carro: CarroTipo
  incluiCarro: boolean
  ingressos: TicketSelection[]
  transfer: boolean
  assistencia: boolean
  pessoas: number
  datas: Datas
}