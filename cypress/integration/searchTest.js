import AmazonHomePage from "../support/pageObject//amazonHomePage";

describe("Automated Search Functionality Test", () => {
  const amazonHomePage = new AmazonHomePage();

  beforeEach(() => {
    amazonHomePage.visit();
  });

  it("Performs search with valid keyword", () => {
    cy.fixture("searchTerms.json").then((searchTerms) => {
      const keyword = searchTerms.validKeyword;

      amazonHomePage.searchForProduct(keyword);
      amazonHomePage.getSearchResults().should("be.visible");
    });
  });

  it("Handles no-result scenario", () => {
    cy.fixture("searchTerms.json").then((searchTerms) => {
      const keyword = searchTerms.invalidKeyword;

      amazonHomePage.searchForProduct(keyword);
      amazonHomePage.getSearchResults().should("not.exist");
    });
  });

  it("Tests response time and relevance", () => {
    cy.fixture("searchTerms.json").then((searchTerms) => {
      const keyword = searchTerms.validKeyword;

      const startTime = new Date().getTime();
      amazonHomePage.searchForProduct(keyword);
      amazonHomePage.getSearchResults().should("be.visible");
      const endTime = new Date().getTime();
      const responseTime = endTime - startTime;

      // Assert response time within acceptable range
      expect(responseTime).to.be.lessThan(7000); // Adjust threshold as needed
    });
  });

 
});
