// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('#name').type('iPhone')
    cy.get('#price').type('35000')
    cy.get('#add').click()
    cy.contains('h1', 'iPhone : 35000')
  })
})
