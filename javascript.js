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
    var lake = {
        lat: 25.719614,
        lng: -80.369308
    };
    var lake2 = {
        lat: 25.775193,
        lng: -80.306342
    };
    // The map, centered at Tropical Park
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 11,
            center: lake2
        });
    // The marker, positioned at park
    var marker = new google.maps.Marker({
        position: park,
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: lake,
        map: map
    });
    var marker3 = new google.maps.Marker({
        position: lake2,
        map: map
    });
}


//Smooth Scrolling
function smoothScroll(target, duration){
    var target = document.querySelector(target)
    var targetPostition = document.getBoundingClientRect();
    var startingPosition = window.pageYOffset;
    var distance = targetPostition - startingPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
    }
    
    requestAnimationFrame(animation);
}


//Dark Sky API Testing
const proxy = 'https://cors-anywhere.herokuapp.com/'
const api = `${proxy}https://api.darksky.net/forecast/7eb1849b0c3162288646af7ce0df5581/25.723354,-80.321624`

console.log(api)

fetch(api)
    .then(response => {
        return response.json();

    }).then(data => {
        console.log(data)
        var temp = document.querySelector('#temperature')
        temp.innerText += " " + data.currently.temperature + "º"

        var wind = document.querySelector('#wind')
        wind.innerText += " " + data.currently.windSpeed + " mph" 

        var cloudCover = document.querySelector('#cloudCover')
        cloudCover.innerText += " " + data.currently.cloudCover
    })

//Flipping Function Code

     


