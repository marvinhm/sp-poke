/// <reference types="cypress" />
describe('PokeList Component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/list');
  })

  it('Should contain a title', () => {
    cy.get('h1').should('contain.text', 'Pokemon List');
  })

  it('can list all 151 pokemon in order', () => {
    cy.get('.listOfPokemon .poke-box')
      .should('have.length', 151)
      .first()
      .should('contain.text', 'bulbasaur')
  })

  it('Click on a pokemon to see extra detials', () => {
    cy.get('#25 .poke-box').click()
    cy.get('.modal-header').should('contain.text', 'Pokemon ID:');
  })
})