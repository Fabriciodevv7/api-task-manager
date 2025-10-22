# API Task Manager (Back-End)

![Status](https://img.shields.io/badge/STATUS-COMPLETO-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

## 📝 Descrição

Esta é uma API RESTful completa para um gerenciador de tarefas (To-Do List), construída com Node.js, Express e MongoDB. O projeto implementa um sistema de back-end robusto, seguro e multi-usuário, com persistência de dados e autenticação baseada em token (JWT).

O foco deste projeto foi dominar os fundamentos do back-end, incluindo a criação de um CRUD completo, gerenciamento de banco de dados NoSQL e a implementação de um fluxo de segurança profissional com autenticação e autorização.

## ✨ Funcionalidades

* **Autenticação de Usuários:**
    * ✅ Registro de novos usuários com senha criptografada (bcrypt).
    * ✅ Login de usuários com geração de JSON Web Token (JWT).
* **Gerenciamento de Tarefas (CRUD Completo):**
    * ✅ **Criar:** Usuários podem criar novas tarefas.
    * ✅ **Ler:** Usuários podem listar **apenas as suas próprias** tarefas.
    * ✅ **Atualizar:** Usuários podem atualizar **apenas as suas próprias** tarefas.
    * ✅ **Deletar:** Usuários podem deletar **apenas as suas próprias** tarefas.
* **Segurança e Autorização:**
    * ✅ Rotas de tarefas protegidas por middleware que verifica o JWT.
    * ✅ Lógica de autorização que garante que um usuário não possa acessar ou modificar dados de outro usuário.

## 🛠️ Tecnologias Utilizadas

* **Node.js:** Ambiente de execução do servidor.
* **Express.js:** Framework para a construção da API e gerenciamento de rotas.
* **MongoDB (com Mongoose):** Banco de dados NoSQL para persistência de dados.
* **JSON Web Token (JWT):** Para criação de tokens de acesso seguros.
* **bcryptjs:** Para criptografia (hashing) de senhas.
* **Dotenv:** Para gerenciamento de variáveis de ambiente.

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
    * Adicione suas chaves secretas:
        ```
        MONGO_URI=mongodb+srv://seu_usuario:sua_senha@seucluster...
        JWT_SECRET=seu_segredo_longo_e_aleatorio_para_o_jwt
        ```
5.  **Inicie o servidor:**
    ```bash
    node servidor.js
    ```
    O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

A API é dividida em rotas de Autenticação e rotas de Tarefas.

---

### Autenticação

#### Registrar Novo Usuário
* **Método:** `POST`
* **Endpoint:** `/registrar`
* **Corpo da Requisição (Body):**
    ```json
    {
      "email": "usuario@email.com",
      "senha": "sua_senha_segura"
    }
    ```
* **Resposta de Sucesso (201 Created):**
    `"Usuário registrado com sucesso!"`

#### Login de Usuário
* **Método:** `POST`
* **Endpoint:** `/login`
* **Corpo da Requisição (Body):**
    ```json
    {
      "email": "usuario@email.com",
      "senha": "sua_senha_segura"
    }
    ```
* **Resposta de Sucesso (200 OK):**
    ```json
    {
      "token": "eyJ... (um token JWT longo)"
    }
    ```

---

### Tarefas (Rotas Protegidas)

**Observação:** Todas as rotas de tarefas exigem um Token JWT válido enviado no cabeçalho de autorização.
`Authorization: Bearer [seu_token]`

#### Listar Tarefas (do usuário logado)
* **Método:** `GET`
* **Endpoint:** `/tarefas`
* **Resposta de Sucesso (200 OK):**
    ```json
    [
        {
            "_id": "...",
            "descricao": "Minha primeira tarefa",
            "concluida": false,
            "dono": "id_do_usuario"
        }
    ]
    ```

#### Adicionar Tarefa
* **Método:** `POST`
* **Endpoint:** `/tarefas`
* **Corpo da Requisição (Body):**
    ```json
    {
      "descricao": "Nova tarefa a ser adicionada"
    }
    ```
* **Resposta de Sucesso (201 Created):** (Retorna a tarefa recém-criada)

#### Atualizar Tarefa
* **Método:** `PUT`
* **Endpoint:** `/tarefas/:id`
* **Corpo da Requisição (Body):**
    ```json
    {
      "descricao": "Descrição da tarefa atualizada",
      "concluida": true
    }
    ```
* **Resposta de Sucesso (200 OK):** (Retorna a tarefa atualizada)

#### Remover Tarefa
* **Método:** `DELETE`
* **Endpoint:** `/tarefas/:id`
* **Resposta de Sucesso (200 OK):**
    ```json
    {
      "message": "Tarefa deletada com sucesso!",
      "tarefa": { ... (dados da tarefa deletada) }
    }
    ```
---

## 👨‍💻 Autor

* **[Fabrício dos Santos Pires de Andrade]**
* **LinkedIn:** [www.linkedin.com/in/fabrícioopires]
* **GitHub:** [https://github.com/Fabriciodevv7]