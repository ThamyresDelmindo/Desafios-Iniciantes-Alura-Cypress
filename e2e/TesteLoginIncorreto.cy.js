describe('TesteLoginIncorretoMely', () => {
    it('Deve preencher os campos do formulário corretamente para efetuar o login', () => {
    cy.visit('https://dedicado.mely.online/');
    cy.contains('button', 'Fechar').click();
    cy.contains('button', 'Perfil').click();
    cy.get('[placeholder="Digite seu e-mail"]').type('estefano.com')
    cy.get('[placeholder="Digite sua senha"]').type('Senha12');
    cy.contains('button', 'Entrar').click();
    cy.contains('O e-mail digitado não é válido, verifique e tente novamente').should('be.visible');
   })

})