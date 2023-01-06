/// <reference types="cypress" />

describe('First test suite', () => {
    it('First test', () => {
        // Navigate to the root path
        cy.visit('/');
        // Look for the element containing the Forms text and click on it (it will be the sidebar dropdown of the Forms section)
        cy.contains('Forms').click();
        // Look for the element containing the Form Layouts text and click on it to navigate to the Form Layouts page
        
        cy.contains('Form Layouts').click();
        // Search element by tag name
        cy.get('input');
        // Find element by ID
        cy.get('#inputEmail1');
        // Find by class name
        cy.get('.input-full-width');
        // Find by attribute name
        cy.get('[placeholder]');
        // Find by attribute name with value
        cy.get('[placeholder="Email"]');
        // By class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]');
        // A combination of tag and attributes
        cy.get('input[placeholder="Email"]');
        // By two different attributes
        cy.get('[placeholder="Email"][type="email"]');
        // A combination of tag, attribute, ID and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');
        // The recommended way by cypress
        cy.get('[data-cy="imputEmail1"]');
    });
});



