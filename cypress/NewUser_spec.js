/// <reference types="cypress" />

describe('Sign up with New User', {scrollBehavior: false}, () => {
    it('Brings you to home page', () => {
        // Given John locates to Lawpath registration page
        cy.visit('https://lawpath.com.au/register')

        // Verify all form fields are initially invalid
        cy.get('input:invalid').should('have.length', 5)

        // When he enters all the required registration information for new user
        cy.get('input[name="firstName"]').type('John')
        cy.get('input[name="lastName"]').type('Wick')
        cy.get('input[name="phone"]').type('123456')
        // Randomised email string with datetime
        var email = Date.now() + "@testing.com"
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="password"]').type('123456')

        // And he hits Sign Up
        cy.get('button[id="signup-submit"]').click();

        // Then his Lawpath account is created and is redirected to the welcome page
        cy.get('div[class="introLHC p-4 my-md-3"]').children('div[class="row"]').children('div[class="col-12 text-center"]').find('h3:first-child').then($element => {
            expect($element).to.have.text('Welcome to Lawpath!');
        })
    })
})
