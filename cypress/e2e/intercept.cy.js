define("Interception methods", () => {
    it("syping only", () => {
        cy.intercept("/users/**")
        cy.intercept("Get", "/users/*")
        cy.intercept({
            method: 'GET',
            url: '/users*',
            hostname: 'localhost',
        })
    })
    it("Syping and stubing response", () => {
        cy.intercept('POST', '/users*', {
            statusCode: 201,
            body: {
                name: 'Peter Pan',
            },
        })
    })
    it("Syping and dynamic stubbing and request modification", () => {
        cy.intercept('/users*', { hostname: 'localhost' }, (req) => {
        }).as("usersGet")
    })

  
    it("Stubbing a response", () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.intercept('GET','/posts', {fixture:"example.json"}).as('get')
        cy.get("tbody tr:nth-child(1) td:nth-child(2) a:nth-child(1)").click()
        cy.wait('@get').then((inter)=>{
            cy.log(inter.response.body)
            cy.exec(`echo ${JSON.stringify(inter.response.body)} >cypress/fixtures/comment.json`)

        })
       
       
    })

    it.only('intercepts request to API endpoint', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
    
    cy.intercept('GET', '/posts', { fixture: 'example.json' }).as('productRequest');
    
    cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click();
    
    cy.wait('@productRequest').then(intercept => {
      cy.exec(
        `echo '${JSON.stringify(intercept.response.body)}' > cypress/fixtures/comment.json`
      )
    });
      });


})