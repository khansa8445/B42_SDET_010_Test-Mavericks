import RegistrationPage from "../../support/pageObject/registrationPage.cy";

describe('User Registration Test', () => {
  const registrationPage = new RegistrationPage();

  it('should register a new user successfully', () => {
    registrationPage.visit();
    registrationPage.selectGender('F');
    registrationPage.enterFirstName('John');
    registrationPage.enterLastName('Doe');
    registrationPage.enterEmail(`johndoe${Date.now()}@mail.com`);
    registrationPage.enterPassword('testpassword123');
    registrationPage.submit();
    registrationPage.validateRegistrationSuccess();
  });
});
