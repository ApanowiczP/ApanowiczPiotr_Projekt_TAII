/// <reference types ="cypress"/>
context('Test8', () => {
    it('Otwarcie strony coingecko.com i zaakceptowanie ciastek', () => {
        cy.visit('https://www.coingecko.com/');
        cy.get('.col-md-12 > div > .btn').click().should("not.be.visible");
    });
});