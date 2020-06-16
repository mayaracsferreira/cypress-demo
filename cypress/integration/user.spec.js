describe('Demonstração de testes de usuario', function(){
    it('Visitar a página', function(){
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('Testar login com usuario inexistente', function(){
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()

        cy.wait(5000)

        cy.get('#loginusername').type('a')
        cy.get('#loginpassword').type('a')

        cy.get('[type="button"]').contains('Log in').click({ force: true })

        cy.on('window:alert', (str) => {
            expect(str).to.equal('User does not exist')
        })
    })

    it('Testar cadastro do usuario', function(){
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#signin2').click()

        cy.wait(5000)

        cy.get('#sign-username').type('a')
        cy.get('#sign-password').type('a')

        cy.on('window:alert', (str) => {
            expect(str).to.equal('This user already exist.')
        })



    })
})