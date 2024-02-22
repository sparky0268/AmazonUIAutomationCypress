class productPage {
  clickOnFirstAddToCart() {
    cy.get("#a-autoid-1-announce").click();
  }

  clickOncart() {
    cy.get(" #nav-cart-count").click();
  }

  updateItemQty() {
    cy.get("#quantity_2").click({ force: true });
  }

  getTotalItemCount(){
  return cy.get('#sc-subtotal-label-activecart').then((element)=>{return element.text()})
  }

  RemoveItemFromCart()
  {
    cy.get("input[value='Delete']").click
  }
}

export default productPage;
