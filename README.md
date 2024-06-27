# Catálogo de Filmes - Sistema de Autenticação JWT

## Descrição

Este projeto é um sistema de autenticação JWT com um CRUD de um catálogo de filmes. Todos os endpoints desta CRUD são protegidos e só podem ser acessados por usuários autenticados.

## Ferramentas Utilizadas

- **TypeScript**
- **Nest.js**
- **TypeORM**
- **Swagger**
- **Docker**
- **Redis**
- **PostgreSQL**

## Requisitos Funcionais

- Desenvolver um sistema de autenticação JWT.
- Construir um CRUD para um catálogo de filmes.
- Proteger todos os endpoints do CRUD para que só possam ser acessados por usuários autenticados.
- Utilizar Redis como cache.

## Arquitetura

A aplicação é composta por uma API RESTful em JSON, utilizando Redis como cache. A arquitetura segue os princípios de design de software para garantir qualidade, escalabilidade e manutenção.

## Endpoints

A documentação completa dos endpoints pode ser encontrada no Swagger após rodar a aplicação em `http://localhost:3000/api`.

### Autenticação

- **POST /sessions**: Autenticação de usuário.
- **POST /users**: Cria um novo usuário.
### Filmes

- **GET /movies**: Lista todos os filmes.
- **GET /movies/:id**: Retorna detalhes de um filme específico.
- **POST /movies**: Cria um novo filme.
- **PUT /movies/:id**: Atualiza um filme existente.
- **DELETE /movies/:id**: Deleta um filme.

## Configuração e Execução

### Pré-requisitos

- Docker
- Docker Compose

### Passos para execução

1. Clone o repositório:
    ```sh
    git clone https://github.com/lidiagaldino/star-soft-challenge
    cd star-soft-challenge
    ```

2. Crie o arquivo `.env` na raiz do projeto com as seguintes variáveis:
    ```env
    DB_HOST=db
    DB_PORT=5432
    DB_USERNAME=nest
    DB_PASSWORD=NestPassword!123
    DB_NAME=nest
    REDIS_HOST=redis
    REDIS_PORT=6379
    REDIS_PASSWORD=RedisPassword!123
    JWT_SECRET=secret
    ```

3. Execute o Docker Compose:
    ```sh
    docker-compose up --build
    ```

4. Acesse a documentação do Swagger em `http://localhost:3000/api`.
