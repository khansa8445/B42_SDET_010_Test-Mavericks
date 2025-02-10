class HomePage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/");
  }

  navigateToLoginPage() {
    cy.contains('Log in').click();
  }

  searchProduct(productName) {
    cy.get('#small-searchterms').clear().type(productName);
    cy.get('input[value="Search"]').click();
  }

  navigateToCart() {
    cy.get('.ico-cart').click();
  }
}

export default HomePage;
