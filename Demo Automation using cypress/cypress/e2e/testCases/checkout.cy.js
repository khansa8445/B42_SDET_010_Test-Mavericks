// import CartPage from '../support/pageObject/cartPage.cy';
// import CheckoutPage from '../support/pageObject/CheckoutPage.cy';
import CartPage from "../../support/pageObject/cartPage.cy";
import CheckoutPage from "../../support/pageObject/CheckoutPage.cy"

describe('Checkout Process', () => {
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const billingData = {
    firstName: "",
    lastName: "Doe",
    email: "john.doe@example.com",
    // add additional required billing fields here
  };

  it('should complete checkout successfully', () => {
    // Ensure the cart has the product before starting checkout
    cartPage.visit();
    checkoutPage.visit();
    checkoutPage.fillBillingAddress(billingData);
    checkoutPage.continueCheckout();
    // Add more steps as needed (shipping, payment, etc.)
    checkoutPage.confirmOrder();

    // Validate order confirmation
    cy.contains('Your order has been successfully processed!').should('be.visible');
  });
});
