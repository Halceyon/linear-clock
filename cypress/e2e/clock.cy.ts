describe('Home Page', () => {
    it('should load the clock', () => {
        cy.visit('/') // Replace '/' with the URL of your home page

        // Add your assertions here to test the elements or behavior on the home page
        // For example:
        cy.get('[data-cy=clock').should('exist');
    })
})
