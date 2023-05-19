describe('testDemo', () => {
    it('should vist', () => {
        cy.visit('https://example.cypress.io/');
    })
})

describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('My Second Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
    })
    it('Clicks on Get Link', ()=>{
        console.log('HELLO FROM 2nd step');
        cy.get('selectors').click
    })
})