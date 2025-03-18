describe('Página de Cadastro Mely Cardápio', () => {
   beforeEach(() => {
      cy.visit('https://dedicado.mely.online/');
   })

   it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {    
      cy.contains('button', 'Fechar').click();
      cy.contains('button', 'Perfil').click();
      cy.contains('button', 'Cadastrar').click();
      cy.get('[placeholder="Nome Completo"]').type('Estefano de Jesus');
      cy.get('[placeholder="Telefone"]').type('11987878787');
      cy.get('[placeholder="E-mail"]').type('estefano@email.com')
      cy.get('[placeholder="Senha"]').type('Senha123');
      cy.get('[placeholder="Confirme sua senha"]').type('Senha123');
      cy.get('body').click();
     // cy.contains('button', 'Cadastrar').click();

     // cy.get('["telefone"]').type('estefano@email.com');
      //cy.get('[data-test="input-email"]').type('estefano@email.com');
      //cy.get('[data-test="input-password"]').type('Senha123');
      //cy.get('[data-test="input-confirm-password"]').type('Senha123');
      //cy.get('[cy.get('body')"]').click();

   })
 
 
      //cy.get('[data-test="register-button"]').click();
      //cy.get('[data-test="input-name"]').type('Estefano de Jesus');
      //cy.get('[data-test="input-email"]').type('estefano@email.com');
      //cy.get('[data-test="input-password"]').type('Senha123');
      //cy.get('[data-test="input-confirm-password"]').type('Senha123');
      //cy.get('[data-test="submit-button"]').click();
  // })
})