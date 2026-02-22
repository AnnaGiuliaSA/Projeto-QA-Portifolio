describe('Fluxo de Busca no E-commerce', () => {
  it('Deve buscar um produto e validar o resultado com sucesso', () => {
    // 1. Visitar o site
    cy.visit('https://www.google.com.br');

    // 2. Digitar o nome do produto no campo de busca
    cy.get('input[name="q"]')
      .type('Curso de QA para iniciantes{enter}');

    // 3. Validar se a página de resultados contém o termo buscado
    cy.contains('Resultados para').should('be.visible');
    cy.url().should('include', 'q=Curso+de+QA');
  });

  it('Deve exibir mensagem de erro ao buscar produto inexistente', () => {
    cy.get('input[name="q"]')
      .type('asdfghjkl123456{enter}');
    
    cy.get('.error-message')
      .should('contain', 'Nenhum resultado encontrado');
  });
});

