import AmazonLoginPage from "../support/pageObject/AmazonLoginPage.js";
import AmazonHomePage from "../support/pageObject//amazonHomePage";
import productPage from "../support/pageObject/productPage";

describe("Shopping Cart Functionality", () => {
  const product = new productPage();
  const amazonLoginPage = new AmazonLoginPage();
  const amazonHomePage = new AmazonHomePage();
  beforeEach(() => {
    amazonLoginPage.visit();
    amazonLoginPage.clickSignInLink();

    cy.fixture("credentials").then((credentials) => {
      const validCredentials = credentials.validCredentials;
      amazonLoginPage.fillEmail(validCredentials.email);
      amazonLoginPage.clickContinueButton();
      amazonLoginPage.fillPassword(validCredentials.password);
      amazonLoginPage.clickSignInSubmitButton();
      cy.intercept("POST", "https://www.amazon.com/ap/cvf/request", (req) => {
        req.reply({ captchaPassed: true });
      }).as("byPassCaptcha");
      //cy.wait("@byPassCaptcha");
      //amazonLoginPage.verifyUrlContains("signin");
    });
  });

  it("verify add/update/remove products to the shopping cart", () => {
    cy.fixture("searchTerms.json").then((searchTerms) => {
      const keyword = searchTerms.validKeyword;
      amazonHomePage.searchForProduct(keyword);
      amazonHomePage.getSearchResults().should("be.visible");
      product.clickOncart();
      const SubtotalString = product.getTotalItemCount();
      const itemIncartBefore = cy.getItemCount(SubtotalString);
      cy.log("item in cart Before " + itemIncartBefore);
      cy.go("back");
      product.clickOnFirstAddToCart();
      product.clickOncart();
      product.getTotalItemCount();
      product.updateItemQty();
      product.getTotalItemCount();
      cy.getItemCount(SubtotalString).then((itemIncartAfterUpdate) => {
        cy.log("item in cart AfterUpdate " + itemIncartAfterUpdate);
        expect(itemIncartAfterUpdate).to.be.greaterThan(itemIncartBefore);
      });
      product.RemoveItemFromCart();
      cy.getItemCount(SubtotalString).then((itemIncartAfterRemoval) => {
        cy.log("item in cart AfterRemoval " + itemIncartAfterRemoval);
        expect(itemIncartAfterRemoval).to.be.greaterThan(itemIncartBefore);
      });
    });
  });

 
});
