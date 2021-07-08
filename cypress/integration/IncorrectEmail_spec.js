/// <reference types="cypress" />

describe('User Input badly formatted email', {scrollBehavior: false}, () => {
    it('Verify incorrect input fields', () => {
        // When John locates to Lawpath registration page
        cy.visit('https://lawpath.com.au/register')

        // Verify all form fields are initially invalid
        cy.get('input:invalid').should('have.length', 5)

        // When he enters registration information using a badly formatted email
        cy.get('input[name="email"]').type('badly-formatted-email')
            .then($element => $element[0].checkValidity()).should('be.false')

        // Then an error of badly formatted email should be thrown
        cy.get('input[name="email"]').then($element => {
            expect($element[0].validationMessage)
                .equal("Please include an '@' in the email address. 'badly-formatted-email' is missing an '@'.")
        })
    })
})
