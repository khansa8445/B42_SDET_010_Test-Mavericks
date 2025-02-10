import ShoppingCartPage from "../../support/pageObject/ShoppingCartPage.cy";

describe('Shopping Cart Tests', () => {
  const shoppingCartPage = new ShoppingCartPage();

  it('should add an item to the shopping cart', () => {
    shoppingCartPage.visit();
    shoppingCartPage.addItemToCart('Smartphone');
    shoppingCartPage.openCart();
    shoppingCartPage.validateItemInCart('Smartphone');
  });
});
