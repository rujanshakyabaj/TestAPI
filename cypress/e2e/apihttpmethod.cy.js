describe("HTTP Request", () => {
   
    it("GET single user", () => {
      const req=  cy.request('GET', '/users/1')
            req.its('status').should('eq',200);
    })
    it("GET All user", () => {
        cy.request('GET', 'http://localhost:3000/users')
            .its('status').should('equal', 200);
    })

    it("POST call", () => {
        cy.request({
            method: 'POST',
            url: '/users',
            body: {
                "id": "10",
                "firstName": "Avi",
                "lastName": "Dangol",
                "age": 45
            }
        }).its('status').should('eq',201)
    })
    it("PUT call",()=>{
        cy.request({
            method:'PUT',
            url:'/users/1',
            body:{
                id: "1",
                firstName: "Rujan",
                lastName: "Shakya",
                age: 45
            }
        }).its('status').should('eq',200)
    })
    
    it("DELETE CALL",()=>{
        cy.request({
            method:'DELETE',
            url:'/users/10',
            
    }).its('status').should('eq',200)
    })

    it("GET single user response log", () => {
        cy.request('GET', '/users/1').then((response)=>{
           var responsebody=response.body
           cy.log(responsebody)
          for(var res in responsebody){
            cy.log(responsebody[res])
          }
        })
      })
})