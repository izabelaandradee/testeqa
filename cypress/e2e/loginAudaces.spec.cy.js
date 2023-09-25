describe('Login Audaces', () => {
    it('Busca Google', () => {
        //ajusta resolução da tela
        cy.viewport(1365, 768);
        //Acessa Gooogle e busca pela Audaces
        cy.visit('https://www.google.com/');
        cy.get('textarea[title="Pesquisar"]').type("Audaces").type('{enter}');
        cy.wait(20);
        //Realiza login no site Audaces
        cy.get('a[href="https://audaces.com/pt-br"]').click();
        cy.get('a[href="https://my.audaces.com/"]').should('have.length.greaterThan', 0);
        cy.get('a[href="https://my.audaces.com/"]').click();
        cy.wait(5);
        cy.get('input[id="username"]').type("email.teste.com");
        cy.get('input[id="password"]').type('passwordtest');
        cy.get('button[typeof="buton"]').click();

    });
    
    it('Site Audaces/BotãoCliente', () => {
        cy.viewport(1365, 768)
        cy.visit('https://audaces.com/');
        cy.wait(5);
        cy.get('a[href="https://my.audaces.com/"]').click();
        cy.wait(5);
        cy.get('input[id="username"]').type("email.teste.com");
        cy.get('input[id="password"]').type('passwordtest');
        cy.get('button[typeof="buton"]').click();
    });
    it(' Site MyAudaces', () => {
        cy.viewport(1365, 768)
        cy.visit('https://my.audaces.com/');
        cy.wait(5);
        cy.get('input[id="username"]').type("email.teste.com");
        cy.get('input[id="password"]').type('passwordtest');
        cy.get('button[typeof="buton"]').click();

    });
});