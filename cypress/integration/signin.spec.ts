// https://docs.cypress.io/api/introduction/api.html

describe("Authentication Flow", () => {
  it("visits the sign in page", () => {
    cy.visit("/signin");
    cy.get("[data-cy=email]").should("exist");
  });
});
