import HomePage from "../../support/pageObject/HomePage.cy";
import ProductPage from "../../support/pageObject/ProductPage.cy"; // ✅ Import ProductPage correctly
import CheckoutPage from "../../support/pageObject/CheckoutPage.cy";
import LoginPage from "../../support/pageObject/LoginPage.cy";

describe('E-commerce Test Suite', () => {
  const homePage = new HomePage();   
  const productPage = new ProductPage(); // ✅ Ensure correct instantiation
  const checkoutPage = new CheckoutPage();
  const loginPage = new LoginPage();

  it('should complete a full purchase process', () => {
    homePage.visit();
    homePage.navigateToLoginPage(); 

    loginPage.login('prajyotisuryawanshi639@gmail.com', 'demo12345');
    loginPage.validateLoginSuccess();

    homePage.searchProduct("Laptop");

    // ✅ Ensure function name exactly matches the one in ProductPage
    productPage.selectProduct("14.1-inch Laptop"); 
    productPage.addToCart();

    productPage.goToCart();
    checkoutPage.proceedToCheckout();
    checkoutPage.fillBillingDetails();
    checkoutPage.confirmOrder();
  });
});
