/// <reference types="cypress" />

describe('When user has bad internet connectivity', {scrollBehavior: false}, () => {
    it('Will have a status code of 408', () => {       
        // Intercept and mock timeout error
        cy.intercept('GET','https://lawpath.com.au/register', (req) => {
            req.reply({
              headers: {
              },
              statusCode: 408,
              body: '<h1>408 Request Timeout<h1>',
              delay: 10, // milliseconds
              throttleKbps: 1000, // to simulate a 3G connection
              forceNetworkError: false // default
            })
          })

        // When John locates to Lawpath registration page
        cy.visit('https://lawpath.com.au/register',{failOnStatusCode: false})
        
        // Then he should get a timeout error
        cy.get('h1').should(($h1) => {
            expect($h1).to.have.text('408 Request Timeout')
        })
        
    })
})