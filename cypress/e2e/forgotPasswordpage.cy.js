/// <reference types='cypress'/>

describe('', () => {
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
        
    });
});

