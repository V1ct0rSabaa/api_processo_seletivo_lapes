# API - Startups

Projeto de API RESTful desenvolvida para o processo seletivo do LAPES, o grupo de pesquisa e desenvolvimento de Engenharia de Software no CESUPA.
A API contém os principais verbos HTTP(GET, POST, PATCH e DELETE) para transmitir os dados de startups armazenados no banco de dados mongodb


## Instalação e Requisitos

- Node.js (20.17.0 - LTS)
- MongoDB
  - instalado localmente, utilizei a GUI MongoDB Compass (1.44.0)
  -  online pelo MongoDB Atlas

### Passos

1. Clone o repositório:
    ```bash
    git clone https://github.com/V1ct0rSabaa/api_processo_seletivo_lapes/
    ```

2. Navegue para o diretório do projeto:
    ```bash
    cd *nome do repositorio*
    ```

3. Instale as dependências:
    ```bash
    npm install express dotenv nodemon cors typescript ts-node @types/express @types/node mongodb mongoose
    ```

5. (Opcional) Compile o código TypeScript:
    ```bash
    tsc 
    ```

6. Inicie a API com Nodemon para desenvolvimento:
    ```bash
     npx nodemon app.ts
    ```

## Tecnologias Utilizadas

Abaixo estão as principais tecnologias e ferramentas utilizadas na construção desta API:

- **Node.js**
- **TypeScript**: superset de Javascript, implementando tipagem forte para um desenvolvimento mais seguro e escalavel
- **MongoDB**: Banco de dados NoSQL baseado em documentos.
- **Mongoose**: Biblioteca de modelagem de dados para MongoDB e Node.js.
- **Express**: Biblioteca web flexível para Node.js para desenvolver API, auxiliando na criação de rotas e middlewares
- **Nodemon**: Ferramenta para reinicializar automaticamente o servidor durante o desenvolvimento.
- **CORS**: Middleware para habilitar CORS (Cross-Origin Resource Sharing) nas APIs, permite aceitar requests de outros dominios.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`, facilitando a segurança de informações e configurações.

##  Arquitetura do projeto e Estrutura de pastas

Utilizei o padrão arquitetural **MVC(Model View Controller)** onde separamos respectivamente partes distintas dos códigos e lógicas de negócios
- Model: modelagem dos dados e objetos
- View: interfaces de Usuário
- Controller: gerenciamento de responses e requests, criar as rotas e fazer a conexão entre View e Model

```
controllers
  - empresaController.ts
db
  - connection.ts
models
  - empresa.ts
routes
  - empresaRouter.ts
  - router.ts
app.ts
.env
tsconfig.json
package.json
package-lock.json
```
## Endpoints

Obs: Mais detalhes serão demonstrados nos testes de API durante minha apresentação na segunda fase do processo seletivo.

# Criar uma Startup

- **Método**: POST(Cria uma nova startup)
- **URL**: `/api/startups`
- **Respostas**:
  - ***201**: Startup criada com sucesso.
  - ***500***: Erro ao criar empresa.
### 2. Obter todas as Startups

- **Método**: GET(Retorna uma lista de todas as startups.)
- **URL**: `/api/startups`
- **Respostas**:
  - ***200***: Retorna a lista de startups.
  - ***500***: Erro interno do servidor.
### 3. Obter uma Startup por ID

- **Método**: GET(Retorna os detalhes de uma startup específica pelo ID.)
- **URL**: `/api/startups/:id`
- **Parâmetros**:
  - `id` (URL): ID da startup a ser recuperada.
- **Respostas**:
  - ***200***: Retorna os detalhes da startup.
  - ***404***: Startup não encontrada.
  - ***500***: Erro interno do servidor.

### 4. Atualizar uma Startup por ID

- **Método/Verbo**: PATCH(Atualiza os dados de uma startup específica)
- **URL**: `/api/startups/:id`
- **Resposta**:
  - ***200***: Startup atualizada com sucesso.
  - ***400***: Dados inválidos ou incompletos.
  - ***404***: Startup não encontrada.
  - ***500***: Erro interno do servidor.

### 5. Deletar uma Startup por ID

- **Método**: DELETE( Deleta uma startup específica pelo ID.)
- **URL**: `/api/startups/:id`
- **Parâmetros**:
  - `id` (URL): ID da startup a ser deletada.
- **Resposta**:
  - ***200***: Startup deletada com sucesso.
  - ***404***: Startup não encontrada.
  - ***500***: Erro interno do servidor.
