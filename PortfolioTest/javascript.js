function test() {
    console.log('Dark mode activated')

    //Navbar
    var navbar = document.querySelector('#test1')
    navbar.className = "navbar navbar-expand-md bg-dark navbar-dark shadow fixed-top"
    //Dark Mode Button
    var button = document.querySelector('#dark-mode-button')
    button.className = "btn btn-md btn-outline-light"
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
    var parkHeader = document.querySelector('#tropical-park-header')
    var parkParagraph = document.querySelector('#tropical-park-paragraph')
    findThemDiv.style = "background-color: #212121"
    findThemText.style = "color: #939393"
    parkHeader.style = "color: #939393"
    parkParagraph.style = "color: #939393"
    //Footer Div
    var footerDiv = document.querySelector('#footer-section')
    var footerText = document.querySelector('#footer-text')
    footerDiv.style = "border-top: 2px solid white"
    footerDiv.style = "background-color: #383838"
    footerText.style = "color: #939393"

}
// Initialize and add the map
function initMap() {
    // The location of Tropical Park
    var park = {
        lat: 25.723354,
        lng: -80.321624
    };
    // The map, centered at Tropical Park
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 13,
            center: park
        });
    // The marker, positioned at park
    var marker = new google.maps.Marker({
        position: park,
        map: map
    });
}
