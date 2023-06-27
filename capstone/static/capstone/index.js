

document.addEventListener('DOMContentLoaded', function (event) {
    // by default, load all posts
    event.preventDefault();
    //load_page('all_posts');
    console.log("got to js page")

    //document.querySelector("#message").innerHTML = "Got to index.js"
    document.querySelector('#newPage').style.display = 'none';

    // toggle between buttons
    //document.querySelector('#destinations').addEventListener('click', pick_place);
    //document.querySelector('#food').addEventListener('click', compose_email);
});

function compose_email() {
    // Show compose view and hide other views
    document.querySelector('#showImgs').style.display = 'none';
    //document.querySelector('#emails-list').style.display = 'none';
    //document.querySelector('#oneEmail').style.display = 'none';
    //document.querySelector('#compose-view').style.display = 'block';
};

function pick_place() {
    console.log('Got to pick_place')
    // show newPage and hide main page
    //document.querySelector('#showImgs').style.display = 'none';
    //document.querySelector('#app').style.display ='none';
    //document.querySelector('#newPage').style.display = 'block';
    //const mymap = L.map('map').setView([51.505, -0.09], 13);
    const mymap = L.map('map').setView([41.893, 12.493], 13)

    //L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 19,
        id: 'mapbox/streets=v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: apikey,
    }).addTo(mymap);

};