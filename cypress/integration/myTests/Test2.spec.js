/// <reference types ="cypress"/>
import queries from '../../fixtures/searchQueries.json'
import googlePage from '../../pageObject/googlePage'
const google = new googlePage();
context('Test2', () => {
    it('Wpisanie w wyszukiwarkę Google frazy "Wikipedia" i wyszukanie wyników', () => {
        cy.visit('www.google.com');
        google.getConfirmPopUpButton().click();
        google.typeInSearchInput(queries[1].fraze).invoke('val').then(($val)=>{
            // cy.log($val)
            google.typeInSearchInput('{enter}').then(()=>{
                cy.url().should('contain', $val);
            })
        })
    });
});