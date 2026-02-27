import type { Projeto } from "../../types/TypeProjeto"

const STORAGE_KEY = 'listaDeProjetos'


export const carregarProjetos = (): Projeto[] => {
    const dados = localStorage.getItem(STORAGE_KEY)
    return dados ? JSON.parse(dados) : []
}
export const salvarProjetos = (projetos: Projeto[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projetos))
}