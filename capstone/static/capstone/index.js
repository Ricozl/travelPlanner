const apikey = 'pk.eyJ1IjoibWFwLXVuNjIzIiwiYSI6ImNsajk1bmtuajB6bWQzbW81dXQxc2V3ZmsifQ.pHR1ndWInokMfvttpqGnag';


document.addEventListener('DOMContentLoaded', function (event) {
    // by default, load all posts
    event.preventDefault();
    //load_page('all_posts');
    console.log("got to js page")

    //document.querySelector("#message").innerHTML = "Got to index.js"
    document.querySelector('#newPage').style.display = 'none';

    // toggle between buttons
    document.querySelector('#destinations').addEventListener('click', pick_place);
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
    // show newPage and hide main page
    //document.querySelector('#showImgs').style.display = 'none';
    //document.querySelector('#app').style.display ='none';
    //document.querySelector('#newPage').style.display = 'block';
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}