describe('busca cursos', () => {

    beforeEach(() => {
        //definindo onde será a pesquisa de busca de cursos
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java'); //Buscar por curso digitado
        cy.get('.header-barraBusca-form-submit').click(); //Realizar o click após escrever na barra de busca
        cy.get('h4.busca-resultado-nome') //Utilizar DevTools para identificar o nome do elemento para busca no teste
            .should('contain', 'Formação Java e Orientação a Objetos'); //buscar a formação java e OO
    })
})