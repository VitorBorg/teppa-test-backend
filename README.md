# Teppa teste Full Stack - Back-end

Projeto que tinha como requisito obrigatório a implementação de uma api back-end e que realizasse as operações de CRUD, além de autenticar os tokens das requisições vindas no header.

## Observações
O deploy da aplicação foi feito na Heroku, porém nos testes houve problema de comunicação, que eu não consegui identificar o problema. Apesar de, em local, os testes tenham funcionado. Ainda assim, na versão atual do front-end, as requisições estão sendo feitas para a aplicação rodando na heroku (link abaixo).

Link do deploy do front end:
https://teppa-test-backend.herokuapp.com

## Rotas

https://teppa-test-backend.herokuapp.com/nota/all - Obtém todas as notas no banco 

https://teppa-test-backend.herokuapp.com/nota/`id` - Obtém a nota indicada no id

https://teppa-test-backend.herokuapp.com/nota/delete/`id` - Deleta a nota indicada no id

https://teppa-test-backend.herokuapp.com/nota/save - Salva a nota (passadas pelo body) no banco 

https://teppa-test-backend.herokuapp.com/save/`id` - Altera a nota (passadas pelo body) no banco indicada no id 


## Rodando o projeto
Para rodar o projeto utilize `npm run dev ou npm run start`

## 🛠️ Construído com

* Node js
* TypeScript
* Express
* Firebase auth, database

## 🚀 Funcionalidades implementadas

* Autenticação de requisições
* CRUD

<!--
## 📄 Screenshots

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.
-->
