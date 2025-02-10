class registrationPage {
    visit() {
      cy.visit("https://demowebshop.tricentis.com/register");
    }
  
    selectGender(gender) {
      cy.get(`input[value="${gender}"]`).check();
    }
  
    enterFirstName(name) {
      cy.get('#FirstName').clear().type(name);
    }
  
    enterLastName(name) {
      cy.get('#LastName').clear().type(name);
    }
  
    enterEmail(email) {
      cy.get('#Email').clear().type(email);
    }
  
    enterPassword(password) {
      cy.get('#Password').clear().type(password);
      cy.get('#ConfirmPassword').clear().type(password);
    }
  
    submit() {
      cy.get('input[value="Register"]').click();
    }
  
    validateRegistrationSuccess() {
      cy.contains('Your registration completed').should('be.visible');
    }
  }
  
  export default registrationPage;
  