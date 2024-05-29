export interface PropostaResponse {
    id: number;
    nome: string;
    sobrenome: string;
    telefone: string;
    cpf: string;
    renda: number;
    valorSolicitado: number;
    prazoPagamento: number;
    aprovado: boolean;
    observacao: string;
}