/*.global.Given,.Then,.And,.When..*/


import TestPage from '../pageobjects/testPage'
const projeto = new TestPage


Given("que eu acesso o site Verity", () => {
    projeto.acessarSite();
    projeto.esperar();
})

When("valido título SOMOS HUMANOS", () => {
    projeto.ValidarSomosHumanos();
    projeto.esperar();
})

And("valido título SOMOS DIGITAIS", () => {
    projeto.ValidarSomosDigitais();
    projeto.esperar();
})

And("valido título SOMOS VERITY", () => {
    projeto.ValidarSomosVerity();
    projeto.esperar();
})

And("valido título agentes da transformação inspirando protagonismo nas pessoas e gerando resultados para organizações", () => {
    projeto.ValidarAgenteTransformação();
    projeto.esperar();
})


///Cenário 2 ///


Given("que eu acesso o site Verity", () => {
    projeto.acessarSite();
    projeto.esperar();
})

When("clico no menu VERITY LAB", () => {
    projeto.ClicarMenuVerityLAb();
    projeto.esperar();
    
})

And("valido o título CONTEÚDO EXCLUSIVO", () => {
    projeto.ValidarConteúdoExclusivo();
    projeto.esperar();

})

And("valido o título VERITY LAB", () => {
    projeto.ValidarVerityLab();
    projeto.esperar();

})

And("preencho o campo NOME COMPLETO", () => {
    projeto.PreencherNomeCompleto();
    projeto.esperar();

})

And("preencho o campo EMPRESA", () => {
    projeto.PreencherEmpresa();
    projeto.esperar();

})

And("preencho o campo E-MAIL", () => {
    projeto.PreencherEmail();
    projeto.esperar();

})

And("preencho o campo TELEFONE", () => {
    projeto.PreencherTelefone();
    projeto.esperar();

})

And("clico no Checkbox", () => {
    projeto.ClicarCheckBox();
    projeto.esperar();

})

Then("clico no botão PARTICIPAR", () => {
    projeto.ClicarParticipar();
    projeto.esperar();

})

//Cenário 3 - Bugs Encontrados//


Given("que eu acesso o site Verity2", () => {
    projeto.acessarSite();
    projeto.esperar();
})

When("clico no menu VERITY LAB2", () => {
    projeto.ClicarMenuVerityLab2();
    projeto.esperar();
    
})

And("preencho o campo NOME COMPLETO2", () => {
    projeto.PreencherNomeCompleto2();
    projeto.esperar();

})

And("preencho o campo EMPRESA2", () => {
    projeto.PreencherEmpresa2();
    projeto.esperar();

})

And("preencho o campo E-MAIL2", () => {
    projeto.PreencherEmail2();
    projeto.esperar();

})

And("preencho o campo TELEFONE2", () => {
    projeto.PreencherTelefone2();
    projeto.esperar();

})

And("clico no Checkbox2", () => {
    projeto.ClicarCheckBox2();
    projeto.esperar();

})

Then("clico no botão PARTICIPAR2", () => {
    projeto.ClicarParticipar2git ();
    projeto.esperar();

})























