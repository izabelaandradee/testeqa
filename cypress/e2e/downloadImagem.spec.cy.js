describe('Download de imagem', () => {
    it('Abrir Google e fazer pesquisa', () => {
        //Ajusta resolução da tela
        cy.viewport(1365, 768)
        //Abre Gooogle
        cy.visit('https://www.google.com/');
        //Pesquisa imagem
        cy.get('textarea[title="Pesquisar"]').type("imagem tecnologia").type('{enter}');
        //Aguarda carregar os elemtentos de imagem
        cy.get('img').should('have.length.greaterThan', 0);

        //Copia endereço da imagem
        const srcimagem = " ";
        cy.get('img[id="dimg_1"]').invoke('src').then(srcimagem);
        cy.log(srcimagem);

        //Faz download da imagem
        cy.downloadFile(srcimagem);

});
});
