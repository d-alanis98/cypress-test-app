/// <reference types="cypress" />

describe('First test suite', () => {

    beforeEach(() => {
        // Navigate to the root path
        cy.visit('/');
        // Look for the element containing the Forms text and click on it (it will be the sidebar dropdown of the Forms section)
        cy.contains('Forms').click();
        // Look for the element containing the Form Layouts text and click on it to navigate to the Form Layouts page
        cy.contains('Form Layouts').click();
    });
    it('First test', () => {
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

    it('Second test', () => {
        cy.get('[data-cy="signInButton"]');
        cy.contains('Sign in');
        // When there could be multiple matches for the provided value to search, we can specify extra filters
        cy.contains('[status="warning"]', 'Sign in');
        
        // To select a sibling of an element with an identifier, we can get the reference to the parent 
        // In this example, we will get the button that is inside the same form as the inputEmail3 element
        // Difference between find and get is that get is global, so it will match all the buttons in the DOM, while find is relative to the current node
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox');

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]');
    });
});



