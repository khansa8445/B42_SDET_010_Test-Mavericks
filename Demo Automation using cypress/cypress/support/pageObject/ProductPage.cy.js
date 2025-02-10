class ProductPage {
  selectProduct(productName) {
    cy.contains(productName).click();
  }

  addToCart() {
    // Click only the first matching "Add to cart" button to avoid multiple clicks
    cy.get('input[value="Add to cart"]').first().click();
    
    // Verify the product was added successfully
    cy.get('.content').should('contain', 'The product has been added');
  }

  goToCart() {
    cy.get('.ico-cart').click();
  }
}

export default ProductPage;
