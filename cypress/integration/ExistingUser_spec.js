/// <reference types="cypress" />

describe('Sign up with Existing User', {scrollBehavior: false}, () => {
    it('Gives an error with existing user', () => {
        // When John locates to Lawpath registration page
        cy.visit('https://lawpath.com.au/register')

        // Verify all form fields are initially invalid
        cy.get('input:invalid').should('have.length', 5)

        // When he enters registration information of an existing account
        cy.get('input[name="firstName"]').type('John')
        cy.get('input[name="lastName"]').type('Wick')
        cy.get('input[name="phone"]').type('123456')
        cy.get('input[name="email"]').type('123@333.com')
        cy.get('input[name="password"]').type('123456')

        // And he hits Sign Up
        cy.get('button[id="signup-submit"]').click();

        // Then an error of account duplication should be thrown
        cy.get('small[class="color-wild-passion"]').then($element => {
            expect($element).to.have.text('Email address already registered in our system. Please try again.');
        })
    })
})
