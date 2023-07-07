

document.addEventListener('DOMContentLoaded', function (event) {
    // by default, load all posts
    event.preventDefault();
    //load_page('all_posts');
    console.log("got to js page")

    //document.querySelector("#message").innerHTML = "Got to index.js"
    document.querySelector('#newPage').style.display = 'none';
    document.querySelector('#top-site').style.display = 'block';

    // toggle between buttons
    //document.querySelector('section-content').style.display = 'none';
    //document.querySelector('#jumpto').addEventListener('click', choose_site);
    //document.querySelector('#destinations').addEventListener('click', pick_place);
    //document.querySelector('#food').addEventListener('click', compose_email);
    const el = document.getElementById("#ancient-rome");
    if (el) {
        //el.addEventListener('click', load_site('Ancient Rome'));
    //}
        document.querySelector('#ancient-rome').addEventListener('click', function(event) {
            event.preventDefault();
            load_page('Ancient Rome')
        });
    }

});

function compose_email() {
    // Show compose view and hide other views
    document.querySelector('#showImgs').style.display = 'none';
    //document.querySelector('#emails-list').style.display = 'none';
    //document.querySelector('#oneEmail').style.display = 'none';
    //document.querySelector('#compose-view').style.display = 'block';
};

function choose_site() {
    document.querySelector('#showImgs').style.display = 'none';
    document.querySelector('#sites').style.display = 'block';
};

function load_site(site) {
    console.log('got to load_site')
    // Show the site and hide other views
    document.querySelector('#sites').innerHTML = "";
    //document.querySelector('#messages').innerHTML = " ";
    document.querySelector('#showImgs').style.display = 'none';
    document.querySelector('#top-site').style.display = 'block';
    //document.querySelector('#emails-list').style.display = 'block';
    //document.querySelector('#oneEmail').style.display = 'none';
    console.log({site})
    // Show the site name
    document.querySelector('#siteName').innerHTML = `<h3>${site}</h3>`;

    fetch(`/sites/${site}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('got to fetch sites')
            console.log(data)
            //data.forEach((el) => {

                //title = el.title;
                //console.log(el.title);
                //image = el.image_url;
                //description = el.description;
                //category = el.sites_category;
            //})
            //.then(data => {
            if (data === undefined || data.length == 0) {
                document.querySelector('#message').innerHTML = "No Posts Found";
            }
            else {
                for (let i = 0; i < data.length; i++) {

                    //image = data[i].image
                    // create separate div for each site
                    const element = document.createElement('div');
                    element.innerHTML = `<h5 style="width:20%;">${data[i].title}</h5>`;

                    var opt = document.createElement("img");
                    opt.setAttribute('src', data[i].image_url);
                    //opt.setAttribute('Pick a date', 'alternate text');
                    opt.setAttribute('height', '80%');
                    opt.setAttribute('width', '80%');
                    opt.setAttribute('object-fit', 'cover');
                    element.appendChild(opt);

                    // build each site
                    const ele = document.createElement('p');
                    ele.innerHTML = `<p style="display:inline-block; width:50%;">${data[i].description}</p><span><img src="https://www.publicdomainpictures.net/pictures/40000/velka/red-heart-1362916005N5Z.jpg" style="width:20px; height:20px;"></span>`;

                    element.appendChild(ele);
                    // add event listener for clicking on a site
                    //element.addEventListener('click', function(e) {
                        //const etarget = e.target;
                        //console.log(etarget)
                    //});

                    document.querySelector('#sites').append(element);
                };
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
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