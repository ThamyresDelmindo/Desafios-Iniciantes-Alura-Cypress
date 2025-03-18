describe('Página de Cadastro INCORRETO Mely Cardápio', () => {
    beforeEach(() => {
       cy.visit('https://dedicado.mely.online/');
    })
 
    it('Deve preencher os campos do formulário INCORRETAMENTE para cadastrar um novo usuário', () => {    
       cy.contains('button', 'Fechar').click();
       cy.contains('button', 'Perfil').click();
       cy.contains('button', 'Cadastrar').click();
       cy.get('[placeholder="Nome Completo"]').type('Estefano de Jesus');
       cy.get('[placeholder="Telefone"]').type('Estefano de Jesus');
       cy.get('[placeholder="E-mail"]').type('estefanoemail.com');
       cy.get('[placeholder="Senha"]').type('Senha123');
       cy.get('[placeholder="Confirme sua senha"]').type('Senha1');
       cy.get('body').click();
       //cy.get('button', 'body').click();
       //cy.contains('As senhas digitadas não conferem, verifique e tente novamente').should('be.visible');
    
       //({ force: true });
     })
  })