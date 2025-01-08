/// <reference types='cypress'/>

describe('Test cases for forgot password page', () => {
    it('Forgot Password Page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', '/web/index.php/auth/login')    //to confirm the login path after base url
    
        cy.get('.orangehrm-login-forgot-header')
        .should('have.text', 'Forgot your password? ')
        .invoke("removeAttr", "target")
        .click()
        cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode') //to confirm new 'forgot password page'
        cy.get('h6').should('have.text', 'Reset Password')
        cy.get('input[name="username"]').type('Admin')
        cy.get('button[type="button"]')
        .invoke("removeAttr", "target")
        .click()
        cy.url().should('include', '/web/index.php/auth/login')    //to confirm the page is navigated back to login path after base url

    });
});

