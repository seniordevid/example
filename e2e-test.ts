// cypress/e2e/user/login-spec.ts
describe("User Login", () => {
  it("Should handle login successfully", function () {
    const email = "test@mail.com";
    const password = "test-pwd";

    cy.visit('/login');
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(`${password}{enter}`);
    cy.wait(1000);

    // URL should be redirected to dashboard
    cy.location("pathname").should("include", `/app`);

    // UI should reflect this user being logged in
    cy.get("h2").should("contain", "Welcome to dashboard");
    cy.get("button").should("contain", "Add New Post");
  });
});
