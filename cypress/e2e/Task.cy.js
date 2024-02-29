describe("cy TaskDemo ", () => {
    it("Task Log", () => {
        cy.task('mylog', 'This will be the output')

    })
    it("Task using parameter",()=>{
        cy.task('hello', { greeting: 'Hello', name: 'World' })

    })

    it("Test number of files",()=>{
        cy.task('countFiles', 'cypress/downloads').then((count) => {
            cy.log(count)
         })

    })
})