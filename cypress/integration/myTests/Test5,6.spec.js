/// <reference types ="cypress"/>
Cypress.Commands.add('closePopUp', () => {
    cy.get('.btn-close').click();
})
context('Test 5,6 - Wejście na stronę wa.pb.edu.pl przez pb.edu.pl i przeczytanie opisu kierunku "Architektura"', () => {
    it('Test 5 Wejście na stronę wa.pb.edu.pl za pośrednictwem pb.edu.pl ', () => {
        cy.visit('https://pb.edu.pl/');
        cy.closePopUp();
        cy.get('.department-wydzial-architektury > a').invoke('removeAttr', 'target').click();
        cy.url().should('contain', 'wa.pb.edu.pl')
    });
    it('Test 6 sprawdzenie poprawności wyświetlania opisu kierunku "Architektura"', () => {
        cy.visit('https://wa.pb.edu.pl/')
        cy.closePopUp();
        cy.get('#menu-item-606 > a > h2').click();
        cy.get(':nth-child(1) > .button').click();
        cy.get(':nth-child(1) > .panel-heading > .panel-title > .collapsed').click();
        cy.get('#custom-collapse-0-0 > .panel-body').should('contain', 'Jako absolwent architektury').should('be.visible')
    })
})