# API Task Manager

![Status](https://img.shields.io/badge/STATUS-CRUD%20COMPLETO-green)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## 📝 Descrição

Esta é uma API RESTful para um gerenciador de tarefas (To-Do List), construída com Node.js, Express e MongoDB. O objetivo é criar um serviço de back-end robusto, com funcionalidades CRUD completas e persistência de dados, pronto para ser consumido por qualquer interface front-end.

## ✨ Funcionalidades

* ✅ **Listar todas as tarefas:** Retorna a lista completa de tarefas existentes.
* ✅ **Adicionar uma nova tarefa:** Permite a criação de uma nova tarefa.
* ✅ **Atualizar uma tarefa:** Atualiza uma tarefa existente pelo seu ID.
* ✅ **Remover uma tarefa:** Exclui uma tarefa específica pelo seu ID.

## 🛠️ Tecnologias Utilizadas

* **JavaScript:** Linguagem principal do projeto.
* **Node.js:** Ambiente de execução do servidor.
* **Express.js:** Framework para a construção da API, gerenciamento de rotas e requisições.
* **MongoDB (com Mongoose):** Banco de dados NoSQL para persistência de dados.
* **Dotenv:** Para gerenciamento de variáveis de ambiente e segredos (como a string de conexão).

## 🚀 Como Rodar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Fabriciodevv7/api-task-manager](https://github.com/Fabriciodevv7/api-task-manager)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd api-task-manager
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Configure suas variáveis de ambiente:**
    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione sua string de conexão do MongoDB Atlas:
      ```
      MONGO_URI=mongodb+srv://seu_usuario:sua_senha@seucluster...
      ```
5.  **Inicie o servidor:**
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
        {
            "_id": "68f7e761c72cb7cb4c7a9d7e",
            "descricao": "Minha primeira tarefa",
            "concluida": false,
            "__v": 0
        }
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
      "descricao": "Nova tarefa a ser adicionada"
    }
    ```
* **Resposta de Sucesso (201 Created):**
    ```json
    {
      "descricao": "Nova tarefa a ser adicionada",
      "concluida": false,
      "_id": "68f7e762c72cb7cb4c7a9d80",
      "__v": 0
    }
    ```

---

### Atualizar Tarefa

* **Método:** `PUT`
* **Endpoint:** `/tarefas/:id`
* **Descrição:** Atualiza uma tarefa existente com base no seu `id`.
* **Parâmetro de URL:**
    * `id` (obrigatório): O `_id` da tarefa a ser atualizada.
* **Corpo da Requisição (Body):**
    ```json
    {
      "descricao": "Descrição da tarefa atualizada",
      "concluida": true
    }
    ```
* **Resposta de Sucesso (200 OK):**
    ```json
    {
      "_id": "68f7e762c72cb7cb4c7a9d80",
      "descricao": "Descrição da tarefa atualizada",
      "concluida": true,
      "__v": 1
    }
    ```
* **Resposta de Erro (404 Not Found):**
    ```json
    {
      "message": "Tarefa não encontrada."
    }
    ```

---

### Remover Tarefa

* **Método:** `DELETE`
* **Endpoint:** `/tarefas/:id`
* **Descrição:** Remove uma tarefa com base no seu `id`.
* **Parâmetro de URL:**
    * `id` (obrigatório): O `_id` da tarefa a ser removida.
* **Resposta de Sucesso (200 OK):**
    ```json
    {
      "message": "Tarefa deletada com sucesso!",
      "tarefa": {
          "_id": "68f7e762c72cb7cb4c7a9d80",
          "descricao": "Descrição da tarefa atualizada",
          "concluida": true,
          "__v": 1
      }
    }
    ```
* **Resposta de Erro (404 Not Found):**
    ```json
    {
      "message": "Tarefa não encontrada."
    }
    ```
---

## 👨‍💻 Autor

* **[Fabrício dos Santos Pires de Andrade]**
* **LinkedIn:** [www.linkedin.com/in/fabrícioopires]
* **GitHub:** [https://github.com/Fabriciodevv7]