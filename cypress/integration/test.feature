Feature: Realizar Validação Dos TÍtulos Site Verity

Scenario: Validar Títulos e Elementos 

Given que eu acesso o site Verity 
When  valido título SOMOS HUMANOS
And   valido título SOMOS DIGITAIS
And   valido título SOMOS VERITY
And   valido título agentes da transformação inspirando protagonismo nas pessoas e gerando resultados para organizações






Scenario: Validar Títulos, Preencher Campos e Participar 

Given que eu acesso o site Verity
When  clico no menu VERITY LAB 
And   valido o título CONTEÚDO EXCLUSIVO
And   valido o título VERITY LAB 
And   preencho o campo NOME COMPLETO 
And   preencho o campo EMPRESA
And   preencho o campo E-MAIL
And   preencho o campo TELEFONE
And   clico no Checkbox
Then  clico no botão PARTICIPAR 



Scenario: Cenário de Erros - Bugs Encontrados Nos Campos de Cadastro 

Given que eu acesso o site Verity2
When  clico no menu VERITY LAB2
And   preencho o campo NOME COMPLETO2
And   preencho o campo EMPRESA2
And   preencho o campo E-MAIL2
And   preencho o campo TELEFONE2
And   clico no Checkbox2
Then  clico no botão PARTICIPAR2 
