'use strict'

describe('Pruebas del Login', () => {
    
    beforeEach( () => {
        cy.fixture('user.json').as('userData')
        cy.visit('/login')
        cy.contains('h1', 'Bienvenido').should('be.visible')
    })
    
    it.skip('Debe registrar un usuario', () => {
        cy.get('@userData').then( (userData) => {
            cy.contains('Crear una cuenta').click()
            cy.get('#name').type(userData.name)
            cy.get('#title').type(userData.company)
            cy.get('#email2').type(userData.email)
            cy.get('#password2').type(userData.password)
            cy.contains('.button', 'Registrarse').click()
            cy.wait(3000)
            cy.get('.error-msg').should('not.exist')
        })
    })

    it('Debe fallar con un usuario erróneo', () => {
        cy.get('#email1').type('noexiste@test.com')
        cy.get('#password1').type('test1234')
        cy.contains('.button', 'Ingresar').click()
        cy.wait(3000)
        cy.get('.error-msg').should('be.visible')
    })

    it('Debe Loguear un usuario', () => {
        cy.get('@userData').then( (userData) => {
            cy.get('#email1').type(userData.email)
            cy.get('#password1').type(userData.password)
            cy.contains('.button', 'Ingresar').click()
            cy.wait(3000)
            cy.contains('a', 'Dashboard').should('be.visible')
        })
    })

    after( () => {
        cy.log('Tests Finalizados')
    })

})