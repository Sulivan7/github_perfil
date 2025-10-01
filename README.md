# 🚀 GitHub Profile Viewer

Uma aplicação React que permite visualizar perfis e repositórios do GitHub de forma simples

## 📋 Sobre o Projeto

O GitHub Profile Viewer é uma aplicação web desenvolvida em React que consome a API do GitHub para exibir informações de usuários e seus repositórios públicos. Com uma interface limpa e responsiva, você pode pesquisar qualquer usuário do GitHub e visualizar seus dados e projetos.

## ✨ Funcionalidades

- 🔍 **Busca de usuários**: Pesquise qualquer usuário do GitHub
- 👤 **Perfil do usuário**: Visualize avatar e nome do usuário
- 📚 **Lista de repositórios**: Veja todos os repositórios públicos do usuário
- 🔗 **Links diretos**: Acesse diretamente os repositórios no GitHub
- 💻 **Linguagens**: Visualize a linguagem principal de cada repositório

## 🛠️ Tecnologias Utilizadas

- **React**
- **Vite**
- **CSS Modules**
- **GitHub API**
- **ESLint**

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Sulivan7/github_perfil.git
```

2. Navegue até o diretório do projeto:

```bash
cd github_perfil
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

5. Abra seu navegador e acesse: `http://localhost:5173`

## 📦 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Cria uma versão otimizada para produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa o ESLint para verificar a qualidade do código

## 🎯 Como Usar

1. Digite o nome de usuário do GitHub no campo de pesquisa
2. Aguarde o nome ter mais de 4 caracteres para ativar a busca
3. Visualize o perfil do usuário com avatar e nome
4. Explore a lista de repositórios públicos
5. Clique em "Visitar no Github" para acessar o repositório original

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Perfil/
│   ├── ReposList/
│   └── formulario/
├── assets/
├── App.jsx
├── main.jsx
└── global.css
```

## 🔗 API Utilizada

Este projeto utiliza a [GitHub REST API v3](https://docs.github.com/en/rest) para buscar informações dos usuários e repositórios:

- **Perfil do usuário**: `https://github.com/{username}.png`
- **Repositórios**: `https://api.github.com/users/{username}/repos`
