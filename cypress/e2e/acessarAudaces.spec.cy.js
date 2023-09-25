describe('Buscar e acessar site Audaces', () => {
    it('Buscar e acessar site Audaces', () => {
        //Ajusta resolução da tela
        cy.viewport(1365, 768) 
        //Acessa Google
        cy.visit('https://www.google.com/');
        //Faz busca pela Audaces
        cy.get('textarea[title="Pesquisar"]').type("Audaces").type('{enter}');
        cy.wait(5);
        //Localiza e acessa site Audaces
        cy.get('a[href="https://audaces.com/pt-br"]').click();
    });
});
