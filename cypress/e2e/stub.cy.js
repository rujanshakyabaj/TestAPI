describe("Stubbing",()=>{
   const objs={
        add:(a,b)=> a+b,
        saymyname:()=> "Rujan"
    }
    it('without stubing',()=>{
        cy.log(objs.add(1,2))
    })
    it('with stubing default return',()=>{
        cy.stub(objs,'add').returns(100)
        cy.log(objs.add(1,2))
    })
    it('with stubing fake  function',()=>{
        cy.stub(objs,'add').callsFake((a,b)=>{
            return a*b
        })
        cy.log(objs.add(1,2))
    })
    it('with alias',()=>{
        cy.stub(objs,'saymyname').returns('Shakya').as('callname')
        cy.log(objs.saymyname())
    })
})