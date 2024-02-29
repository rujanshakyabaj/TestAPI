describe("Debugger Examples", () => {
    it('let me debug like a fiend', () => {
        cy.visit('')

        cy.get("a[href='users']")
        debugger // Doesn't work
    })
    it('let me debug when the after the command executes', () => {
        cy.visit('')

        cy.get("a[href='users']").then(($selectedElement) => {
            // Debugger is hit after the cy.visit
            // and cy.get commands have completed
            debugger
        })
    })
    it('let me debug like a fiend', () => {
        cy.visit('')
      
        cy.get("a[href='users']").debug()
      })
})