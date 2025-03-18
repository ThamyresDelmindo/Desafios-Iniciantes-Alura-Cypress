describe('Página de Login', () => {
    beforeEach(() => {
      cy.visit('https://dedicado.mely.online/');
})
it('Deve preencher os campos do formulário corretamente para efetuar o login', () => {
      cy.contains('button', 'Fechar').click();
      cy.contains('button', 'Perfil').click();
      cy.login('estefano@email.com', 'Senha123');
     })
})