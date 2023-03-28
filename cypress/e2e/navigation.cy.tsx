/// <reference types="cypress" />
describe('Navigation Component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Pokemon list link should take us to the list route', () => {
    cy.contains('Pokemon List').click()
    cy.get('h1').should('contain.text', 'Pokemon List');
  })

  it('Enter Here link should take us to list page', () => {
    cy.contains('Home').click()
    cy.get('h1').should('contain.text', 'Pokemon 1st Generation');
  })
})