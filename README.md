# API de Transferências e Usuários

Esta API foi desenvolvida em Node.js com Express para fins de aprendizado de testes e automação de APIs. Ela permite login, registro de usuários, consulta de usuários e transferência de valores, com regras básicas de negócio e documentação via Swagger.

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente local.
2. Instale as dependências:
   ```bash
   npm install express swagger-ui-express
   ```

## Estrutura de Diretórios

- `controllers/` - Lógica das rotas
- `services/` - Regras de negócio
- `models/` - Dados em memória
- `app.js` - Configuração do Express e rotas
- `server.js` - Inicialização do servidor
- `swagger.json` - Documentação da API

## Como Executar

```bash
node server.js
```

A API estará disponível em `http://localhost:3000`.

## Documentação Swagger

Acesse a documentação interativa em:

```
http://localhost:3000/api-docs
```

## Endpoints

### Usuários

- `POST /users/register` - Registra novo usuário
- `POST /users/login` - Realiza login
- `GET /users` - Lista todos os usuários

### Transferências

- `POST /transfers` - Realiza transferência
- `GET /transfers` - Lista todas as transferências

## Regras de Negócio

- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências acima de R$ 5.000,00 só podem ser feitas para usuários marcados como "favorecido".

## Testes

Para testar a API com Supertest, importe o `app.js` em seus testes sem executar o método `listen()`.

---

API para fins didáticos. Não utilizar em produção.
