# API Task Manager

![Status](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-yellow)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📝 Descrição

Esta é uma API RESTful para um gerenciador de tarefas (To-Do List), construída como parte de um estudo aprofundado em desenvolvimento back-end com o ecossistema Node.js. O objetivo é criar uma base de serviço robusta, com funcionalidades CRUD completas, que possa ser consumida por qualquer interface front-end no futuro.

## ✨ Funcionalidades Atuais

* ✅ **Listar todas as tarefas:** Retorna a lista completa de tarefas existentes.
* ✅ **Adicionar uma nova tarefa:** Permite a criação de uma nova tarefa.
* ✅ **Remover uma tarefa:** Exclui uma tarefa específica através do seu índice.
* ⏳ **Atualizar uma tarefa:** Funcionalidade em desenvolvimento.

## 🛠️ Tecnologias Utilizadas

* **JavaScript:** Linguagem principal do projeto.
* **Node.js:** Ambiente de execução do servidor.
* **Express.js:** Framework para a construção da API, gerenciamento de rotas e requisições.

## 🚀 Como Rodar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Fabriciodevv7/api-task-manager]
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd api-task-manager
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor:**
    ```bash
    node servidor.js
    ```
    O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

A API possui os seguintes endpoints:

---

### Listar Tarefas

* **Método:** `GET`
* **Endpoint:** `/tarefas`
* **Descrição:** Retorna um array com todas as tarefas cadastradas.
* **Resposta de Sucesso (200 OK):**
    ```json
    [
        "Estudar Node.js",
        "Criar primeira API"
    ]
    ```

---

### Adicionar Tarefa

* **Método:** `POST`
* **Endpoint:** `/tarefas`
* **Descrição:** Adiciona uma nova tarefa à lista.
* **Corpo da Requisição (Body):**
    ```json
    {
      "tarefa": "Nova tarefa a ser adicionada"
    }
    ```
* **Resposta de Sucesso (201 Created):**
    ```json
    {
      "mensagem": "Tarefa adicionada com sucesso!",
      "tarefas": [
        "Estudar Node.js",
        "Criar primeira API",
        "Nova tarefa a ser adicionada"
      ]
    }
    ```

---

### Remover Tarefa

* **Método:** `DELETE`
* **Endpoint:** `/tarefas/:id`
* **Descrição:** Remove uma tarefa com base no seu `id` (índice no array).
* **Parâmetro de URL:**
    * `id` (obrigatório): O índice da tarefa a ser removida.
* **Resposta de Sucesso (200 OK):**
    ```json
    {
      "mensagem": "Tarefa removida com sucesso!",
      "tarefas": [
        "Estudar Node.js"
      ]
    }
    ```
---

## 👨‍💻 Autor

* **[Fabrício dos Santos Pires de Andrade]**
* **LinkedIn:** [www.linkedin.com/in/fabrícioopires]
* **GitHub:** [https://github.com/Fabriciodevv7]