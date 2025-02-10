class FooterPage {
    validateFooterLinks() {
      cy.get('.footer').should('be.visible');
      cy.contains('Contact us').should('be.visible');
      cy.contains('Privacy Notice').should('be.visible');
      cy.contains('Conditions of Use').should('be.visible');
    }
  }
  
  export default FooterPage;
  