describe('Demostração de teste do carrinho', function(){
    it('Teste adicionar produto ao carrinho', function(){
        cy.visit('https://www.demoblaze.com/index.html')

        cy.get('.hrefch').contains('Samsung galaxy s6',{ timeout: 10000 }).click()

        cy.get('.btn.btn-success.btn-lg').contains('Add to cart').click()

        cy.get('#cartur').click()

        cy.get('table').contains('td', 'Samsung galaxy s6')                
    })

    it('Teste deletar produto do carrinho', function(){
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('.hrefch').contains('Samsung galaxy s7',{ timeout: 10000 }).click()
        cy.get('.btn.btn-success.btn-lg').contains('Add to cart').click()
        cy.get('#cartur').click()

        cy.get('table').contains('td', 'Delete').click()

        cy.get('table').find('tr').each(function (row, i){
            expect(i).to.be.lessThan(5)
        })
    })

    it('Teste falha ao contar elementos da tabela', function(){
        cy.visit('https://www.demoblaze.com/index.html')        
        cy.get('#cartur').click()
        cy.get('table').find('tr').each(function (row, i){
            expect(i).equal(5)
        })
    })
})