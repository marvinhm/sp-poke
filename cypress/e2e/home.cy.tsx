/// <reference types="cypress" />
describe('Homepage Component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Should contain a title', () => {
    cy.get('h1').should('contain.text', 'Pokemon 1st Generation');
  })

  it('Enter Here link should take us to list page', () => {
    cy.contains('Enter Here').click()
    cy.get('h1').should('contain.text', 'Pokemon List');
  })
})