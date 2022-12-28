/// <reference types="Cypress" />
import EnderecoPage from '../support/page-objects/endereco.page';


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
     });
    
     
    it('Deve fazer cadastro de faturamento com sucesso', () => {
       EnderecoPage.editarEnderecoFaturamento('Diogo', 'Santos', 'jv.teste', 'Brasil', 'Av. paulista', '164', 'São Paulo', 'São Paulo', '08565300', '11999999', 'diogo@teste.com')
       cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});