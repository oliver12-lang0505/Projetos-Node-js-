** Consulta de CEP com Node.js
** Sobre o projeto

Projeto desenvolvido em JavaScript utilizando Node.js e a biblioteca correios-brasil para realizar consultas de CEP.
O sistema recebe um CEP, realiza uma consulta e retorna os dados do endereço correspondente.

*** Funcionalidades
•	Consulta de CEP.
•	Aceita CEP com ou sem pontuação.
•	Busca informações do endereço.
•	Retorna os dados por meio de uma Promise.
•	Exibe o resultado no terminal.

*** Tecnologias utilizadas
•	JavaScript
•	Node.js
•	Biblioteca correios-brasil
•	Promises
•	CommonJS

   Estrutura do projeto
text
consulta-cep/
+-- app.js
+-- package.json
+-- README.md

** Instalação

1. Instale o Node.js
Baixe em: https://nodejs.org/

2. Crie a pasta do projeto
bash
mkdir consulta-cep
cd consulta-cep

3. Inicialize o projeto
bash
npm init -y

4. Instale a biblioteca
bash
npm install correios-brasil

** Código principal

Arquivo: app.js
javascript
const { consultarCep } = require('correios-brasil');

// CEP pode ser String ou Number
const cep = '20010-000';

consultarCep(cep)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Erro ao consultar CEP:', error);
  });

** Como executar

No terminal, execute:
bash
node app.js

** Exemplo de utilização
CEP informado:
text
20010-000

O programa realiza a consulta e apresenta os dados do endereço retornados pela biblioteca.
Os campos e o formato exato da resposta dependem do serviço utilizado pela dependência.

** Objetivo educacional

Este projeto permite praticar conceitos importantes de JavaScript:
•	Importação de bibliotecas.
•	Uso de módulos externos.
•	Funções assíncronas.
•	Promises (then e catch).
•	Tratamento de erros.
•	Entrada e saída de dados.
•	Integração com serviços de consulta de CEP.

** Melhorias futuras
•	Permitir digitar o CEP pelo terminal.
•	Validar o formato do CEP antes da consulta.
•	Exibir os dados em formato organizado.
•	Criar uma interface gráfica.
•	Desenvolver uma API REST para consultas de CEP.

** Autor
Projeto desenvolvido para fins de estudo e prática de JavaScript e Node.js.
________________________________________
? Se gostou do projeto, deixe uma estrela no repositório!

