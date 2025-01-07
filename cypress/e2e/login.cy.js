/// <reference types='cypress'/>


describe('Visit URL & Login Scenarios', () => {
    it('visits the baseURL and navigate to login page with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', '/web/index.php/auth/login')    //to confirm the login path after base url
        cy.get('input[name="username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click()
    });
    it('should give error for invalid user', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', '/web/index.php/auth/login')    //to confirm the login path after base url
        cy.get('input[name="username"]').type('Sana')
        cy.get('[type="password"]').type('abcdef')
        cy.get('[type="submit"]').click()
        cy.get('.oxd-alert-content-text').should('be.visible')
        .should('have.text', 'Invalid credentials')
        cy.get('.oxd-alert-content-text').contains('Invalid credentials')

    });
    it('should give error over empty fields', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', '/web/index.php/auth/login')    //to confirm the login path after base url

        cy.get('input[name="username"]').should('have.value', '')
        cy.get('[type="password"]').should('have.value', '')
        cy.get('[type="submit"]').click()

        cy.get('.oxd-input-group__message').first()
        .should('have.text', 'Required')

        cy.get('.oxd-input-group__message').last()
        .should('have.text', 'Required')
        cy.get('.oxd-input-group__message').contains('Required ')
    });

});