import AmazonLoginPage from "../support/pageObject/AmazonLoginPage.js";

describe("Amazon Login Process", () => {
  const amazonLoginPage = new AmazonLoginPage();

  beforeEach(() => {
    amazonLoginPage.visit();
    amazonLoginPage.clickSignInLink();
  });

  it("Logs in with valid credentials", () => {
    cy.fixture("credentials").then((credentials) => {
      const validCredentials = credentials.validCredentials;

      amazonLoginPage.fillEmail(validCredentials.email);
      amazonLoginPage.clickContinueButton();
      amazonLoginPage.fillPassword(validCredentials.password);
      amazonLoginPage.clickSignInSubmitButton();
      amazonLoginPage.verifyUrlContains("signin");
    });
  });

  it("Displays error message for invalid email", () => {
    amazonLoginPage.fillEmail("xyzexample.com");
    amazonLoginPage.clickContinueButton();
    amazonLoginPage.getErrorMessage().should("be.visible");
  });

  it("Displays error message for empty email", () => {
    amazonLoginPage.clickSignInSubmitButton();
    amazonLoginPage.clickContinueButton();
    amazonLoginPage.getEmailMissingAlert().should("be.visible");
  });

  it("Displays error message for empty password", () => {
    cy.fixture("credentials").then((credentials) => {
      const validCredentials = credentials.validCredentials;
      amazonLoginPage.fillEmail(validCredentials.email);
      amazonLoginPage.clickContinueButton();
      amazonLoginPage.clickSignInSubmitButton();
      amazonLoginPage.getPasswordMissingAlert().should("be.visible");
    });
  });


});
