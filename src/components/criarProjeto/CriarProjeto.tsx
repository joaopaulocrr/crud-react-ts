import type { ChangeEvent, FormEvent } from "react";
import styles from "./CriarProjeto.module.css";
import type { Projeto } from "../../types/TypeProjeto";
interface criarProjetoProps {
  valorInputNome: string;
  valorInputDescricao: string;
  onChangeInputNome: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInpuDescricao: (e: ChangeEvent<HTMLInputElement>) => void;
  criarProjeto: (e: FormEvent<HTMLFormElement>) => void;
 projetoEmEdicao: Projeto | null
}



const CriarProjeto = ({ 
  criarProjeto, 
  onChangeInputNome, 
  onChangeInpuDescricao,
  valorInputNome,
  valorInputDescricao,
  projetoEmEdicao
}: criarProjetoProps) => {

  return (
    <section className={styles.section}>
      <div className={styles.containerForm}>
        <h2>Criar Projeto</h2>
        
        <form onSubmit={criarProjeto} className={styles.form}>
          <label htmlFor="nomeProjeto">Nome do projeto: </label>
          <input
            type="text"
            name="nomeProjeto"
            id="nomeProjeto"
            value={valorInputNome}
            onChange={onChangeInputNome}
            required
          />
          <label htmlFor="descricaoProjeto">Descrição do projeto: </label>
          <input
            type="text"
            name="descricaoProjeto"
            id="descricaoProjeto"
            value={valorInputDescricao}
            onChange={onChangeInpuDescricao}
            required
          />
          <button type="submit">{projetoEmEdicao ? "Atualizar Projeto" : "Salvar Projeto"}</button>
        </form>
      </div>
    </section>
  );
};

export default CriarProjeto;
