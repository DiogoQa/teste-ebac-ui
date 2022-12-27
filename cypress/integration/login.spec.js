/// <reference types="Cypress" />

describe('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    })
    
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('dyogolopes10@gmail.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, dyogolopes10 ')
    })

    it('Deve exibir uma mensagem de erro ao enserir usuário inválido', () => {
        cy.get('#username').type('dg@gmail.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    
    it('Deve exibir uma mensagem de erro ao enserir senha inválida', () => {
        cy.get('#username').type('dyogolopes10@gmail.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail dyogolopes10@gmail.com está incorreta. Perdeu a senha?')

    })

})