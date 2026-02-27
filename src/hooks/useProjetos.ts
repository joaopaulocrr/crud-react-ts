import { useState, useEffect } from "react";

import type { Projeto } from "../types/TypeProjeto";

import { carregarProjetos, salvarProjetos } from "../storage/storage/Storage";

export const useProjetos = () => {
  const [listaDeProjetos, setListaProjetos] = useState<Projeto[]>(() => carregarProjetos())
  const [projetoEmEdicao, setProjetoEmEdicao] = useState<Projeto | null>(null)

  useEffect(() => {
    salvarProjetos(listaDeProjetos)
  }, [listaDeProjetos])

  function adicionarProjeto(projeto: Projeto) {
    setListaProjetos(prev => [...prev, projeto])
  }

  function alterarEstado(id: string): void {
    const novaLista = listaDeProjetos.map((projeto) =>
      projeto.id === id
        ? { ...projeto, concluido: !projeto.concluido }
        : projeto,
    );
    setListaProjetos(novaLista);
  }

   function selecionarParaEditar(projeto: Projeto) {
    setProjetoEmEdicao(projeto);
  }


  function cancelarEdicao():void {
    setProjetoEmEdicao(null)
    
  }

  function atualizarProjetoEditado(projetoEditado: Projeto) {
    setListaProjetos(prev => prev.map(p => p.id === projetoEditado.id ? projetoEditado : p))
    setProjetoEmEdicao(null)
  }

  function removerProjeto(id: string): void {
    setListaProjetos((prev) => prev.filter((p) => p.id !== id))
  }

  return {
    listaDeProjetos,
    projetoEmEdicao,
    setProjetoEmEdicao,
    adicionarProjeto,
    alterarEstado,
    selecionarParaEditar,
    cancelarEdicao,
    atualizarProjetoEditado,
    removerProjeto
  }
}
