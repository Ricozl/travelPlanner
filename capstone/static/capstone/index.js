

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
    document.querySelector('#showImgs').style.display = 'none';
    document.querySelector('#top-site').style.display = 'block';
    //document.querySelector('#emails-list').style.display = 'block';
    //document.querySelector('#oneEmail').style.display = 'none';
    console.log({site})
    // Show the site name
    document.querySelector('#siteName').innerHTML = `<h3>${site}</h3>`;

    // get emails
    //document.querySelector('#emails-list').innerHTML = "";
    //email_id = 0;

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
            data.forEach((el) => {

                title = el.title;
                console.log(el.title);

                //console.log(image);
                description = el.description;
                category = el.sites_category;
            })
            //let text = image;
            //let newimage = text.replace(".", "/");
            //let image = text.replace(".", "/");
            //console.log(image)
            // create separate div for each email
            const element = document.createElement('div');
            var opt = document.createElement("img");
            opt.setAttribute('src', 'el.image_url');
            //opt.setAttribute('Pick a date', 'alternate text');
            opt.setAttribute('height', '300px');
            opt.setAttribute('width', '300px');
            document.querySelector('#sites').append(opt);
            //const img = document.createElement('img');
            //img.src = image;
            //element.appendChild(img);
            //if ({site} == 'Markets') {
                //img.src = `https://static/capstone/campo-dei-fiori2.jpg`
            //}
            // build each email
            element.innerHTML = `<h5 style="width:20%;">${title}</h5><p style="display:inline-block;"><img src="{{img.src}}" style="width:400px; height:400px;"><p style="display:inline-block; width:50%;">${description}</p><span><img src="https://www.publicdomainpictures.net/pictures/40000/velka/red-heart-1362916005N5Z.jpg" style="width:20px; height:20px;"></span>`;

            // add event listener for clicking on a site
            //element.addEventListener('click', function(e) {
                //const element = e.target;
                //console.log(element)

        //});
            document.querySelector('#sites').append(element);
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