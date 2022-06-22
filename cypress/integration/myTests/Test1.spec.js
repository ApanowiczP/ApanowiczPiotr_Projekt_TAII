/// <reference types ="cypress"/>
import googlePage from '../../pageObject/googlePage'
const google = new googlePage();
context('Test1', () => {
    it('Zamykanie Pop Up na stronie Google.pl', () => {
        cy.visit('www.google.com');
        google.getConfirmPopUpButton().click().should('not.be.visible');
    });
});