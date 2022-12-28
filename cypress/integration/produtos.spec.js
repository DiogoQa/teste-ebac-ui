/// <reference types="Cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first().click()   
            //.last().click()
            //.eq(3)
            .contains('Abominable Hoodie').click()
            
    })

    it('Deve adiconar um produto ao carrinho', () => {
        var quantidade = 10
        
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'M', 'Green', 5)
    });

    it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
        cy.addProdutos('Arcadio Gym Short', 36, 'Blue', 2)
    });




});
