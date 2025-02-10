class LoginPage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/login");
  }

  enterEmail(email) {
    cy.get('#Email').clear().type(email);
  }

  enterPassword(password) {
    cy.get('#Password').clear().type(password);
  }

  submit() {
    cy.get('input[value="Log in"]').click();
  }

  login(email, password) {
    this.visit();
    this.enterEmail(email);
    this.enterPassword(password);
    this.submit();
  }

  validateLoginSuccess() {
    // Alternative validation using .contains()
    cy.contains('My account', { timeout: 20000 }).should('be.visible');

    // Debugging - Ensure we get a successful login message
    cy.get('.account').invoke('text').then((text) => {
      cy.log('Logged-in User:', text);
    });

    
  }
}

export default LoginPage;
