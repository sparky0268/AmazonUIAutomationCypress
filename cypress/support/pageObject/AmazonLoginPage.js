class AmazonLoginPage {
  visit() {
    cy.visit("https://www.amazon.com/");
  }

  clickSignInLink() {
    cy.get("span[class='nav-line-2 ']").click();
  }

  fillEmail(email) {
    cy.get("#ap_email").type(email);
  }

  clickContinueButton() {
    cy.get("input[id='continue']").click();
  }

  fillPassword(password) {
    cy.get("#ap_password").type(password);
  }

  clickSignInSubmitButton() {
    cy.get("#signInSubmit").click();
  }

  getErrorMessage() {
    return cy.get("#auth-error-message-box");
  }

  getEmailMissingAlert() {
    return cy.get("#auth-email-missing-alert");
  }

  getPasswordMissingAlert() {
    return cy.get("#auth-password-missing-alert");
  }

  verifyUrlContains(substring) {
    cy.url().should("include", substring);
  }
}

export default AmazonLoginPage;
