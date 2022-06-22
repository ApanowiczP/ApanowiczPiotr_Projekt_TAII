class googlePage{
    _confirmPopUpButton = '#L2AGLb > .QS5gu'
    _searchInput = ".gLFyf"

    getConfirmPopUpButton(){
        return cy.get(this._confirmPopUpButton)
    }
    getSearchInput(){
        return cy.get(this._searchInput)
    }
    typeInSearchInput(text){
        return cy.get(this._searchInput).type(text)
    }
}
export default googlePage
