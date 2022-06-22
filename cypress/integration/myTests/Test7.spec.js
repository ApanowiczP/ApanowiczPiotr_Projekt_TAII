/// <reference types ="cypress"/>
context('Test 7', () => {
    it('Zapisanie się na newsletter Zalando',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          });
        cy.visit('https://www.zalando.pl/zalando-newsletter/') ;
        cy.get('#email-input').type('test@automatyczny.pl');
        cy.get(':nth-child(1) > .RsYQDu > .Vm2aBa').click();
        cy.get(':nth-child(5) > .DJxzzA').click();
        cy.get('.DgFgr2 > .reVeb9').should('contain', 'Już prawie!')
    });
})
