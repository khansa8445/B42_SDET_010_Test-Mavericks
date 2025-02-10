class WishlistPage {
    visit() {
      cy.visit("https://demowebshop.tricentis.com/");
    }
  
    // addItemToWishlist(productName) {
    
      
    // }
  
    openWishlist() {
      cy.get('.wishlist-label').click();
    }
  
    validateItemInWishlist(productName) {
      cy.contains('Wishlist').should('be.visible');
      cy.contains(productName).should('be.visible');
    }
  }
  
  export default WishlistPage;
  