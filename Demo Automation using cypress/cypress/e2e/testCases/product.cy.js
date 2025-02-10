import HomePage from '../../support/pageObject/HomePage.cy';
import ProductPage from '../../support/pageObject/ProductPage.cy';
import CartPage from '../../support/pageObject/cartPage.cy';

describe('Product Browsing and Cart', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();

  it('should search for a product, view details and add to cart', () => {
    homePage.visit();
    productPage.searchProduct("computer");
    productPage.selectProduct("Build your own computer");
    productPage.addToCart();
    
    // Optionally, check for confirmation message or cart count change
    cartPage.visit();
    cartPage.verifyProductInCart("Build your own computer");
  });
});
