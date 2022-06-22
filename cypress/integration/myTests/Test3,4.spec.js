/// <reference types ="cypress"/>
context('Test 3,4 - Wejście na stronę x-kom i włożenie towaru do koszyka', () => {
    it('Test 3 - Użytkownik po wejściu na stronę ma możliwość na stronę może przejść do sekcji Laptopy/Notebooki/Ultrabooki',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          });
        cy.visit('https://www.x-kom.pl/') ;
        cy.get('.sc-1p1bjrl-9').click();
        // ('body > div > div > div > div > div > button:nth-child(2)')
        cy.get(':nth-child(1) > .sc-13hctwf-0 > .sc-13hctwf-5').click();
        cy.get('.fcMCVZ > .sc-16n31g-2 > :nth-child(1) > .sc-1h16fat-0').click();
        cy.wait(1500);
        cy.url().should('include', "www.x-kom.pl/g-2/c/159-laptopy-notebooki-ultrabooki");

    });
    it('Test 4 - Użytkownik po wejściu po wybraniu modelu laptopa ma możliwość włożenia go do koszyka',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          });
        cy.visit('www.x-kom.pl/g-2/c/159-laptopy-notebooki-ultrabooki') ;
        cy.get('.sc-1p1bjrl-9').click();
        cy.get(':nth-child(1) > .sc-1yu46qn-3 > .sc-1yu46qn-4 > .sc-1yu46qn-10 > :nth-child(1) > .sc-1h16fat-0 > .sc-1yu46qn-9 > span').click();
        cy.get('.sc-1hdxfw1-3').click();
        cy.wait(1500);
        cy.get('.an0bcv-3').should('be.visible');
    });

})

