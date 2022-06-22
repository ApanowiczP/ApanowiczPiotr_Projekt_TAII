/// <reference types ="cypress"/>
context('Test9', () => {
    it('Test logowania formularza czajnikowo.pl', () => {
        cy.visit('https://www.czajnikowy.com.pl/');
        cy.get('.header-nav > .account-item > .nav-top-link > span').click();
        cy.get('#username').type('abc@cba.pl');
        cy.get('#password').type('falsepassword');
        cy.get(':nth-child(3) > .woocommerce-button').click();
        cy.get('.message-container').should('contain','Nieznany adres e-mail. Proszę sprawdzić ponownie lub wypróbować swoją nazwę użytkownika.');
    });
    it('Test formularza kontaktowego czajnikowo.pl', () => {
        cy.visit('https://www.czajnikowy.com.pl/');
        cy.get('#menu-item-18660 > .nav-top-link').click();
        cy.get('.forminator-button').click();
        cy.get('#name-1 > .forminator-field > .forminator-error-message').should('contain','Proszę podać imię');
        cy.get('#email-1 > .forminator-field > .forminator-error-message').should('contain','Email jest wymagany');
        cy.get('#textarea-1 > .forminator-field > .forminator-error-message').should('contain','Proszę wpisać treść wiadomości');
    });
});