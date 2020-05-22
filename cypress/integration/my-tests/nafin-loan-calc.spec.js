describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Loads page', () => {
        it('Should load the page', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');
        });
    });
    
    describe('Text inputs', () => {
        it('Should input into all text fields', () => {
            cy.get('#dispDate')
                .clear()
                .type('05/05/2020 {enter}')
            cy.get('#creditAmount')
                .clear()
                .type(20000)
            cy.get('#rate')
                .clear()
                .type(15.0)
        }); 
    });

    describe('Select menus', () => {
        it('Should select desired option in dropdown menu', () => {
            cy.get('#paymentMethod')
                .select('Mensual')
            cy.get('#period')
                .select('2 años')
        });
    });
    
    describe('Submit form', () => {
        it('Should click "Calcular" button and display info', () => {
            cy.contains('Calcular').click();
            cy.contains('Ahora no').click();
            cy.contains('Pago Capital').should('be.visible');
        });
    });

    describe('Count table rows', () => {
        it('Should count 24 rows in the table', () => {
            cy.get('#resultadosSimulador').find('tbody').find('tr').should('have.length', 24);
        });
        
    });
    
});
