function test() {
    console.log('Dark mode activated')

    //Navbar
    var navbar = document.querySelector('#test1')
    navbar.className = "navbar navbar-expand-md bg-dark navbar-dark shadow fixed-top"
    //Species Div
    var speciesDiv = document.querySelector('#species-container')
    var speciesHeader = document.querySelector("#species-text")
    speciesDiv.style = "background-color: #141414"
    speciesHeader.style = "color: #939393"
    //Species Cards
    var allCards = document.querySelector("#species-row")
    document.querySelector("#species-row > div:nth-child(1) > div > div").style = "background-color: #141414"
    document.querySelector("#species-row > div:nth-child(2) > div > div").style = "background-color: #141414"
    document.querySelector("#species-row > div:nth-child(3) > div > div").style = "background-color: #141414"
    document.querySelector("#species-row > div:nth-child(4) > div > div").style = "background-color: #141414"
    allCards.style = "color: #939393"
    //Where To Find Them Div
    var findThemDiv = document.querySelector('#find-them-container')
    var findThemText = document.querySelector('#find-them-text')
    findThemDiv.style = "background-color: #212121"
    findThemText.style = "color: #939393"





}