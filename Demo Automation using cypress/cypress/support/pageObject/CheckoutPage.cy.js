class CheckoutPage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/cart");
  }

  proceedToCheckout() {
    cy.get(".checkout").click();
  }

  fillBillingDetails() {
    cy.get("#BillingNewAddress_CountryId").select("United States");
    cy.get("#BillingNewAddress_City").type("New York");
    cy.get("#BillingNewAddress_Address1").type("123 Main Street");
    cy.get("#BillingNewAddress_ZipPostalCode").type("10001");
    cy.get("#BillingNewAddress_PhoneNumber").type("1234567890");
  }

  confirmOrder() {
    cy.contains("Confirm").click();
  }

  validateOrderSuccess() {
    cy.contains("Your order has been successfully processed!").should(
      "be.visible"
    );
  }
}

export default CheckoutPage;
