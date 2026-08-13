# ❌⭕ Jogo da Velha (React + Vite)

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS Badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License Badge" />
</p>

Uma aplicação web interativa e responsiva do clássico **Jogo da Velha** (*Tic-Tac-Toe*), desenvolvida como projeto prático para demonstrar os fundamentos do **React.js** (gerenciamento de estado, imutabilidade, renderização condicional e componentes funcionais) aliado à velocidade de *build* do **Vite**.

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Demonstração Visual](#-demonstração-visual)
- [Arquitetura e Estrutura de Pastas](#-arquitetura-e-estrutura-de-pastas)
- [Conceitos do React Aplicados](#-conceitos-do-react-aplicados)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Próximos Passos (Roadmap)](#-próximos-passos-roadmap)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🎯 Visão Geral

Este projeto foi construído do zero focando em código limpo, boas práticas e alta performance. Ele aborda o ciclo completo de desenvolvimento web front-end moderno: desde a inicialização com gerenciadores de pacotes (`npm`), controle de versão com `git`, até a manipulação reativa de estados para controle de regras do jogo.

---

## ✨ Funcionalidades

- 🔄 **Alternância Dinâmica de Turnos:** Controle automático da vez do jogador (`X` ou `O`).
- 🛡️ **Validação de Jogada:** Bloqueio contra sobrescrita de posições já marcadas.
- 🏆 **Algoritmo de Detecção de Vitória:** Verificação instantânea de combinações vencedoras (horizontais, verticais e diagonais).
- 🤝 **Detecção de Empate (Velha):** Reconhecimento automático quando todas as posições são preenchidas sem um vencedor.
- 🧹 **Reset Instantâneo:** Botão para reiniciar o tabuleiro e restaurar o estado inicial a qualquer momento.
- 🎨 **Interface Limpa e Responsiva:** Design otimizado para telas desktop e dispositivos móveis.

---

## 📐 Arquitetura e Estrutura de Pastas

```text
jdv-react/
├── node_modules/         # Dependências do projeto
├── public/               # Arquivos estáticos públicos (favicons, etc)
├── src/                  # Código-fonte da aplicação
│   ├── assets/           # Imagens e recursos visuais
│   ├── App.css           # Estilização global e dos componentes
│   ├── App.jsx           # Componente principal e lógica do jogo
│   ├── main.jsx          # Ponto de entrada (renderização no DOM)
│   └── index.css         # Reset CSS e variáveis globais
├── .gitignore            # Arquivos ignorados pelo Git
├── index.html            # Estrutura HTML principal
├── package.json          # Manifesto do projeto e dependências npm
├── README.md             # Documentação do repositório
└── vite.config.js        # Configurações de compilação do Vite