//import Loginage from '../../support/pageObject/Loginpage.cy';
import LoginPage from "../../support/pageObject/LoginPage.cy";
//


//import LoginPage from "../../support/pageObject/LoginPage.cy";

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  it('should log in successfully with valid credentials', () => {
    const email = "prajyotisuryawanshi639@gmail.com";
    const password = "demo12345";

    loginPage.login(email, password);

    // Debugging - Log current URL after clicking login
    cy.url().then((currentUrl) => {
      cy.log('Current URL:', currentUrl);
    });

    // Validate login success
    loginPage.validateLoginSuccess();
  });
});

