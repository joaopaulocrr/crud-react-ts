import type { Projeto } from "../../types/TypeProjeto";

import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  projeto: Projeto;
  projetoEmEdicao: Projeto | null;
  funcaoAlterar: (id: string) => void;
  funcaoRemover: (id: string) => void;
  funcaoEditar: (projeto: Projeto) => void;
  funcaoCancelar: () => void;
  
}



const ProjectItem = ({
  projeto,
  projetoEmEdicao,
  funcaoCancelar,
  funcaoAlterar,
  funcaoRemover,
  funcaoEditar,
 
}: ProjectItemProps) => {

  return (
    <li key={projeto.id} className={styles.liProject}>
      <h3 className={styles.projectTitlle}>{projeto.nome}: </h3>
      <span>{projeto.concluido ? "Concluído - ✅" : "Em andamento - ⏳"} </span>

      <p>{projeto.descricao}</p>

      {projetoEmEdicao ? (
        <button onClick={() => funcaoCancelar()}>Cancelar edição</button>
      ) : (
        <div className={styles.divButtonContainer}>
          <button onClick={() => funcaoAlterar(projeto.id)}>
            {projeto.concluido ? "Continuar" : "Concluir"}{" "}
          </button>

          <button
            onClick={() => funcaoEditar(projeto)}
            className={styles.buttonEditar}
          >
            Editar
          </button>

          <button
            onClick={() => funcaoRemover(projeto.id)}
            className={styles.buttonExcluir}
          >
            ❌
          </button>
        </div>
      )}
    </li>
  );
};

export default ProjectItem;