describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Sidebar', () => {
  it('Sidebar collapses successfully', () => {

    cy.get('.collapse-sidebar').click()

    cy.get('.sidebar').invoke('outerWidth').should('be.eq', 53);

  })
})

describe('The Home Page', () => {
  it('successfully loads', () => {

    cy.get('#vat-rate-input').clear().type('11')

  })
})
