import styles from "./App.module.css";

import type { Projeto } from "./types/TypeProjeto";

import ProjectItem from "./components/projectItem/ProjectItem";
import CriarProjeto from "./components/criarProjeto/CriarProjeto";
import { useProjetos } from "./hooks/useProjetos";
import { useState } from "react";

function App() {
  const {
    listaDeProjetos,
    projetoEmEdicao,
    setProjetoEmEdicao,
    adicionarProjeto,
    alterarEstado,
    atualizarProjetoEditado,
    cancelarEdicao,
    removerProjeto,
  } = useProjetos();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  function selecionarParaEditar(projeto: Projeto) {
    setProjetoEmEdicao(projeto);
    setNome(projeto.nome);
    setDescricao(projeto.descricao);
  }

  function handleCancelar() {
    cancelarEdicao()
    setNome("")
    setDescricao("")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataForm: Projeto = {
      id: crypto.randomUUID(),
      nome: nome,
      descricao: descricao,
      concluido: false,
    };

    if (projetoEmEdicao) {
      const projetoAtualizado: Projeto = {
        id: projetoEmEdicao.id,
        nome: nome,
        descricao: descricao,
        concluido: projetoEmEdicao.concluido,
      };
      atualizarProjetoEditado(projetoAtualizado);
    } else {
      adicionarProjeto(dataForm);
    }
    setNome("");
    setDescricao("");
  };

  return (
    <div className={styles.divContainerGeral}>
      <h1>Projetos</h1>

      <CriarProjeto
        valorInputNome={nome}
        onChangeInputNome={(e) => {
          setNome(e.target.value);
        }}
        valorInputDescricao={descricao}
        onChangeInpuDescricao={(e) => {
          setDescricao(e.target.value);
        }}
        projetoEmEdicao={projetoEmEdicao}
        criarProjeto={handleSubmit}
       
      />

      <ul>
        {listaDeProjetos.map((projeto) => (
          <ProjectItem
            key={projeto.id}
            projeto={projeto}
            funcaoAlterar={alterarEstado}
            funcaoRemover={removerProjeto}
            funcaoEditar={selecionarParaEditar}
            funcaoCancelar={handleCancelar}
            projetoEmEdicao={projetoEmEdicao}
            
          />
        ))}
      </ul>
    </div>
  );
}

export default App;