describe("Testing API calls", () => {
    it('passes', () => {
        cy.request("GET", "/users").then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body[0])
        })
    })
    it("Check for local host request", () => {
        cy.request("GET", "/users").then((response) => {
            const responsebody = response.body
            for (var i = 0; i < responsebody.length; i++){
                for (var j in responsebody[i]) {
                    cy.log(responsebody[i][j])
                }
                cy.log("==============")
            }
        })

    })

    it("Check for local host intercept", () => {
        cy.visit('/');
        cy.intercept('/users',"My Dummy data").as('getuser')
        cy.get("a[href='users']").click()
        cy.wait('@getuser')

    });

})

