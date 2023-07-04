describe('testowanie wyszukiwarki steam', () => {
  beforeEach(() => {
    cy.viewport(1920,1080)
    cy.visit('https://store.steampowered.com/')
  })
  it('is it possible to add counter-strike to cart', () => {
    cy.get("#store_nav_search_term").type("Counter-Strike: Global Offensive")
    cy.get("#searchterm_options").click()
    cy.get("#btn_add_to_cart_54029").click()
    cy.wait(200)
    cy.get('.cart_item_desc > a').contains("Ulepszenie do statusu Prime")
  })
  it( 'Is it possible to search an iteam in steam market', () =>{
    cy.get('.supernav_container > [style="display: block"]').trigger('mouseover')
    cy.get('.supernav_content > .submenu_community > [href="https://steamcommunity.com/market/"]').click()

    cy.origin('https://steamcommunity.com', () => {
      cy.get("#findItemsSearchBox").type('Skrzynia Odrzutu{enter}')
      cy.get("#result_0_name").contains("Skrzynia Odrzutu")
    })
  })
  it('Is it possible to switch languages', () => {
    cy.get("#language_pulldown").click()
    cy.get('[href="?l=german"]').click()
    cy.get("#language_pulldown").click()
    cy.get('[href="?l=polish"]').click()
  })
  it('is it possible to search a discussion about Counter-Strike: Global Offensive (game)', () => {
    cy.get('.supernav_container > [style="display: block"]').trigger('mouseover')
    cy.get('.supernav_content > .submenu_community > [href="https://steamcommunity.com/discussions/"]').click()
    cy.origin('https://steamcommunity.com', () => {
      cy.get("#tab_games").contains("Fora gier").click()
      cy.get("#associate_game").type("Counter-Strike: Global Offensive")
      cy.get(".game_suggestion").contains("Counter-Strike: Global Offensive").click()
          })
  })
})