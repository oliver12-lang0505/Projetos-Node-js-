?? Sistema de Consulta de CPF em Node.js
?? Sobre o projeto

Este projeto consiste em um sistema simples de consulta de CPF desenvolvido em JavaScript com Node.js.
O programa solicita ao usuário um CPF pelo terminal, verifica se o formato informado é válido e consulta uma base de dados local para retornar o nome associado ao documento.
?? Funcionalidades

•	Solicitação de CPF pelo terminal.
•	Validação do formato do CPF (11 dígitos numéricos).
•	Consulta de CPF em uma base de dados local.
•	Retorno do nome associado ao CPF.
•	Mensagem de erro para CPF inválido ou não cadastrado.

??? Tecnologias utilizadas
•	JavaScript
•	Node.js
•	Módulo readline
•	CommonJS (require e module.exports)

?? Estrutura do projeto
text
consulta-cpf/
+-- app.js
+-- listar.js
+-- README.md

?? Como executar o projeto
1. Pré-requisitos
É necessário ter o Node.js instalado no computador.

2. Clone o repositório
bash
git clone URL_DO_SEU_REPOSITORIO


3. Acesse a pasta
bash
cd consulta-cpf

4. Execute o programa
bash
node app.js

?? Exemplos de utilização
CPF cadastrado
text
Digite o CPF: 12345678909
? Nome encontrado: João Silva
CPF não cadastrado
text
Digite o CPF: 11111111111
? CPF não encontrado
CPF com formato inválido
text
Digite o CPF: 12345
? CPF inválido
?? Funcionamento dos arquivos
app.js
Responsável por:
•	Receber o CPF digitado pelo usuário.
•	Validar o formato informado.
•	Chamar a função buscarNome().
•	Exibir o resultado da consulta.
listar.js
Responsável por:
•	Armazenar os CPFs e nomes cadastrados.
•	Disponibilizar a função buscarNome(cpf).
•	Retornar o nome correspondente ou null quando não encontrar o CPF.

?? Segurança e privacidade
Este projeto utiliza uma base de dados local e demonstrativa.
Importante: os CPFs utilizados são dados de exemplo. Não utilize documentos pessoais reais em repositórios públicos do GitHub.
O projeto não realiza validação dos dígitos verificadores do CPF, apenas verifica se o valor possui 11 números.

?? Objetivo educacional

Projeto desenvolvido para praticar conceitos fundamentais de programação com JavaScript e Node.js:
•	Funções.
•	Objetos.
•	Condicionais.
•	Módulos.
•	Exportação e importação de funções.
•	Entrada e saída de dados pelo terminal.
•	Validação de dados.

?? Melhorias futuras
•	Implementar validação completa dos dígitos verificadores do CPF.
•	Criar cadastro de novas pessoas.
•	Implementar banco de dados.
•	Criar interface gráfica.
•	Desenvolver uma API para consultas.
???? Autor
Desenvolvido como projeto de estudo em JavaScript e Node.js.
________________________________________
? Se este projeto foi útil para você, deixe uma estrela no repositório!

