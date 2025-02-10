class SearchPage {
    visit() {
      cy.visit("https://demowebshop.tricentis.com/");
    }
  
    searchForItem(itemName) {
      cy.get('#small-searchterms').clear().type(itemName);
      cy.get('.search-box-button').click();
    }
  
    validateSearchResults() {
      cy.contains('Search').should('be.visible');
     cy.get(".product-title").should('be.visible');
    }
  }
  
  export default SearchPage;
  