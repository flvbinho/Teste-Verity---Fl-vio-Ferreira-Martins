/// <reference types="cypress"  />

import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseURL")

class TestPage {
      //Acessando o Site //

      acessarSite() {
          cy.wait(2000)
          cy.visit(url)
          
      }
      //Esperar o site//

      esperar() {
          cy.wait(2000)
      }

      //Validar os campos 



      ValidarSomosHumanos() {
          cy.get(testelements.SomosHumanos()).contains("SOMOS HUMANOS").click()
          cy.wait(2000)
      }

      ValidarSomosDigitais() {
          cy.get(testelements.SomosDigitais()).contains("SOMOS DIGITAIS").click()
          cy.wait(2000)
      }

      ValidarSomosVerity() {
          cy.get(testelements.SomosVerity()).contains("SOMOS VERITY_").click()
          cy.wait(2000)
      }

      ValidarAgenteTransformação() {
          cy.get(testelements.AgenteTransformação()).contains("Agentes de transformação inspirando protagonismo nas pessoas e gerando resultados para organizações.").click()
          cy.wait(2000)
      }


      ///Cenário 2 ///

      ClicarMenuVerityLAb() {
          cy.get(testelements.MenuVerityLab()).click()
          cy.wait(2000)
      }

      ValidarConteúdoExclusivo() {
          cy.get(testelements.ConteúdoExclusivo()).contains("Conteúdo exclusivo").click()
          cy.wait(2000)
      }

      ValidarVerityLab() {
          cy.get(testelements.VerityLab()).contains("VERITY LAB").click()
          cy.wait(2000)
      }

      PreencherNomeCompleto() {
          cy.get(testelements.NomeCompleto()).type("Flávio Ferreira Martins")
          cy.wait(2000)
      }

      PreencherEmpresa() {
          cy.get(testelements.Empresa()).type("flavio.ferreira.mrtn@gmail.com")
          cy.wait(2000)
      }

      PreencherEmail() {
          cy.get(testelements.Email()).type("Verity")
          cy.wait(2000)
      }

      PreencherTelefone() {
          cy.get(testelements.Telefone()).type("11992019440")
          cy.wait(2000)
      }

      ClicarCheckBox() {
          cy.get(testelements.CheckBox()).click()
          cy.wait(2000)
      }

      ClicarParticipar() {
          cy.get(testelements.Participar()).click()
          cy.wait(2000)
      }


      // Cenário 3 -  Bugs Encontrados Nos Campos de Cadastro //



    ClicarMenuVerityLab2() {
        cy.get(testelements.VerityLab2()).click()
        cy.wait(2000)
    }
      
    PreencherNomeCompleto2() {
        cy.get(testelements.NomeCompleto2()).type("1111111")
        cy.wait(2000)
    }

    PreencherEmpresa2() {
        cy.get(testelements.Empresa2()).type("flavio.ferreira.mrtn@gmail.com")
        cy.wait(2000)
    }

    PreencherEmail2() {
        cy.get(testelements.Email2()).type("Flávio")
        cy.wait(2000)
    }

    PreencherTelefone2() {
        cy.get(testelements.Telefone2()).type("Martins")
        cy.wait(2000)
    }

    ClicarCheckBox2() {
        cy.get(testelements.CheckBox2()).click()
        cy.wait(2000)
    }

    ClicarParticipar2() {
        cy.get(testelements.Participar2()).click()
        cy.wait(2000)
    }







}
export default TestPage;

