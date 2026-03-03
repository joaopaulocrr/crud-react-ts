# 📋 CRUD de Projetos - React + TypeScript

## 📌 Sobre o Projeto

Aplicação web desenvolvida para gerenciamento de projetos.

O sistema permite criar, editar, concluir e remover projetos, com persistência de dados utilizando LocalStorage.

O objetivo principal foi praticar organização de componentes, tipagem com TypeScript e gerenciamento de estado no React.

---

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- CSS modules
- LocalStorage

- Git para versionamento
- Github para hospedagem
---

## 🏗️ Arquitetura

O projeto foi estruturado com:

- Componentes separados para função única
- Separação de responsabilidades
- Custom Hook (`useProjetos`) para centralizar regras de negócio
- Elevação de estado (lifting state up)
- Comunicação entre componentes via props

Essa organização facilita manutenção e escalabilidade.

---

## ✨ Funcionalidades

- ✅ Criar novo projeto
- ✏️ Editar projeto existente
- ❌ Cancelar edição
- ✔️ Marcar projeto como concluído
- 🗑️ Remover projeto
- 💾 Persistência automática no navegador

---

## ⚙️ Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/joaopaulocrr/crud-react-ts.git

Entre na pasta do projeto:

cd crud-react-ts

Instale as dependências:

npm install

Execute o projeto:

npm run dev

O projeto estará disponível em:
http://localhost:5173

🧠 Aprendizados

Neste projeto pratiquei:

Gerenciamento de estado com useState

Uso de useEffect para persistência

Criação de Custom Hooks

Tipagem forte com TypeScript(incluindo criação de interfaces)

Fluxo de edição com controle de estado

Organização de projeto com Vite

👨‍💻 Autor

João Paulo
GitHub: https://github.com/joaopaulocrr

LinkedIn: https://www.linkedin.com/in/dev-joao-paulo/



```markdown
## 🔮 Melhorias Futuras

- Implementar Context API para evitar prop drilling(No caso de o projeto crescer e se tornar necessário)
- Adicionar autenticação por usuário
- Melhorar UI/UX
- Adicionar testes automatizados