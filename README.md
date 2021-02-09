# Teste-Verity---Flavio-Ferreira-Martins



# Dado os 2 cenários abaixo, escreva seu respectivo script de teste na linguagem Java/Ruby. Crie o projeto no seu próprio GIT e disponibilize para nós. 


Cenário 1: 

•	Acesse o site da Verity - verity.com.br 

•	Realize a validação dos títulos abaixo para garantir que esses elementos serão encontrados: 

o	SOMOS HUMANOS 

o	SOMOS DIGITAIS 

o	SOMOS VERITY_ 

o	Agentes da transformação inspirando protagonismo nas pessoas e gerando resultados para organizações. 
 
Cenário 2: 
•	Acesse o site da Verity - verity.com.br 
•	Click no Menu “Verity Lab” e valide novamente os seguintes títulos: 
o	Conteúdo Exclusivo 
o	VERITY LAB 
•	Preencher nesta tela os seguintes campos (preferencialmente com seus dados pessoais): 
	Nome Completo 
	Empresa 
	E-mail  
	Telefone 
	Clicar no checkbox; 
	Clicar no botão - Participar 



# Ferramentas Utilizadas no Projeto 

- Sistema Operacional Windows 10 

- VSCODE     - (Editor de Código Fonte) - https://code.visualstudio.com/
- NODEjs     - https://nodejs.org/en/   - Node.js trata-se de um software open-source, cross-platform, e de um runtime de JavaScript 
- CYPRESS    - https://www.cypress.io/  - Framework de testes automatizados
- JAVASCRIPT - Linguagem de programação
 



# Pré-requisitos Para Rodar o Projeto 

1 - Ter Instalado o VSCODE (Editor de Código Fonte) - https://code.visualstudio.com/

2 - Usar os Seguintes Sistemas Operacionais - Linux, MacOs e Windows:

- Linux Ubuntu a partir da 12.04, Fedora 21 e Debian 8 (somente x64);
- MacOs a partir da 10.9 (somente x64);
- Windows a partir do 7.

3 - Você precisa ter o Node.js instalado, a partir da versão 8. - https://nodejs.org/en/

# Carregar o Projeto 

1 - Faça o download do meu projeto em questão (Teste-Verity---Flavio-Ferreira-Martins)

2 - Abra o Editor de Código VSCODE 

3 - Na Aba FILE DO VSCODE, selecione OPEN FOLDER e selecione a pasta do projeto (Teste-Verity---Flavio-Ferreira-Martins) - o projeto deverá carregar automáticamente.

4 - No Menu do topo selecione TERMINAL >> NEW TERMINAL - será apresentado um terminal prompt semelhante a esse: C:\Users\Flávio\Desktop\Teste Verity - Flavio Ferreira Martins>

5 - Para execução do projeto digite o comando:        npm run test:chrome

6 - O projeto deverá rodar no navegador CHROME da forma que deixei configurado, o mesmo deverá concluir Todas as Etapas abaixo configuradas no test.feature em formato BDD.



# Resultados dos Testes 

- Foram efetuados os 2 cenários conforme foi solicitado no teste.

- No passo 3, foi também efetuado um teste dos bugs encontrados em alguns campos do formulário. 



# Mudança de Navegador 

- Caso ache necessário a mudança de navegador, faça o seguinte procedimento para alteração:

- Procure pela extensão package.json >> em seguida selecione a mesma e será apresentado o código abaixo:

- Dentro do código faça a alteração de chrome>> para o navegador de sua preferência, preste atenção porque o nome do navegador escolhido é repetido duas vezes. "test:chrome": "cypress run --browser chrome --no-exit "



{

"scripts": {

    "test:chrome": "cypress run --browser chrome --no-exit "
},


"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/steps"
},


"devDependencies": {

    "cypress": "^6.3.0",
    
    "cypress-cucumber-preprocessor": "^4.0.0",
    
    "mochawesome": "^6.2.1"
}
}

# Vídeo do Teste 

- Caso queira gerar um vídeo para o teste, novamente iremos utilizar o código e procedimento acima, irei destacar abaixo para não confundir.

- Procure pela extensão package.json >> em seguida selecione a mesma e será apresentado o código abaixo:

- Dentro do código faça a alteração - DE >> "test:chrome": "cypress run --browser chrome --no-exit " PARA >> "test:chrome": "cypress run --browser chrome  " , retirando apenas o comando (--no-exit), dessa forma o mochawesome que está configurado reconhecerá e irá gerar um vídeo que estará dentro da pasta do projeto (cypress\videos).

- Caso esteja com problemas de velocidade no vídeo do teste, use o navegador GOOGLE CHROME, que o teste será gravado em uma velocidade menor.

{

"scripts": {

    "test:chrome": "cypress run --browser chrome --no-exit "
},


"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/steps"
},


"devDependencies": {

    "cypress": "^6.3.0",
    
    "cypress-cucumber-preprocessor": "^4.0.0",
    
    "mochawesome": "^6.2.1"
}
}


# Autor

- Flávio Ferreira Martins 



