class ShoppingCartPage {
    visit() {
      cy.visit("https://demowebshop.tricentis.com/");
    }
  
    addItemToCart(productName) {
      cy.contains(productName).parent().parent().contains('Add to cart').click();
    }
  
    openCart() {
      cy.get('.cart-label').click();
    }
  
    validateItemInCart(productName) {
      cy.contains('Shopping cart').should('be.visible');
      cy.contains(productName).should('be.visible');
    }
  }
  
  export default ShoppingCartPage;
  