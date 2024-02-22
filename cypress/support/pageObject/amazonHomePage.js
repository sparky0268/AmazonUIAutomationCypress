class AmazonHomePage {
    visit() {
      cy.visit('https://www.amazon.com/')
    }
  
    searchForProduct(keyword) {
      cy.get('#twotabsearchtextbox').type(keyword)
      cy.get('#nav-search-submit-button').click()
    }
  
    getSearchResults() {
      return cy.get('div[class="a-section a-spacing-small a-spacing-top-small"]')  }
  
  }
  
  export default AmazonHomePage
  