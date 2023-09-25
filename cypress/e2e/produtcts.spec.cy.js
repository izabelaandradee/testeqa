describe('Produtos', () => {
    it('', () => {
    //Ajusta resolução da tela
    cy.viewport(1365, 768)
    //Acessa site Audaces e menu de produtos
    cy.visit('https://audaces.com/');
    cy.contains('button', 'PRODUTOS E SOLUÇÕES').realHover('mouse');
    cy.wait(40);
    //Fecha mensagem de cookies
    cy.get('a[aria-label="dismiss cookie message"]').should('have.length.greaterThan', 0);
    cy.get('a[aria-label="dismiss cookie message"]').click();
    //Clica em cada produto
    cy.get('a[href="/pt-br/solucoes/audaces-360"]').click();
    cy.get('a[href="/pt-br/solucoes/idea"]').click();
    cy.get('a[href="/pt-br/solucoes/fashion-studio"]').click();
    cy.get('a[href="/pt-br/solucoes/digiflash"]').click();
    cy.get('a[href="/pt-br/solucoes/moldes"]').click();
    cy.get('a[href="/pt-br/solucoes/encaixe"]').click();
    cy.get('a[href="/pt-br/solucoes/supera"]').click();

    });
});
