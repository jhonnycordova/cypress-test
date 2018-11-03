'use strict'

describe('Pruebas del Login', () => {
    it('Debe cargar el login', () => {
        cy.visit('/login')
    })

    it('Debe registrar un usuario', () => {
        cy.visit('/login')
        cy.contains('Crear una cuenta').click()
        cy.get('#name').type('Usuario de Prueba')
        cy.get('#title').type('Compañia de Prueba')
        cy.get('#email2').type('test@test.com')
        cy.get('#password2').type('test1234')
        cy.contains('.button', 'Registrarse').click()
        cy.wait(3000)
        cy.get('.error-msg').should('not.exist')
    })

    it('Debe fallar con un usuario erróneo', () => {
        cy.visit('/login')
        cy.get('#email1').type('noexiste@test.com')
        cy.get('#password1').type('test1234')
        cy.contains('.button', 'Ingresar').click()
        cy.wait(3000)
        cy.get('.error-msg').should('be.visible')
    })

    it('Debe Loguear un usuario', () => {
        cy.visit('/login')
        cy.get('#email1').type('test@test.com')
        cy.get('#password1').type('test1234')
        cy.contains('.button', 'Ingresar').click()
        cy.wait(3000)
        cy.contains('a', 'Dashboard').should('be.visible')
    })

})