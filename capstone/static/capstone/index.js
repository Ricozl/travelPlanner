

document.addEventListener('DOMContentLoaded', function (event) {
    // by default, load all posts
    event.preventDefault();
    //load_page('all_posts');
    console.log("got to js page")

    //document.querySelector("#message").innerHTML = "Got to index.js"
    document.querySelector('#newPage').style.display = 'none';
    //document.querySelector('#top-site').style.display = 'none';

    // toggle between buttons
    //document.querySelector('section-content').style.display = 'none';
    //document.querySelector('#jumpto').addEventListener('click', choose_site);
    //document.querySelector('#destinations').addEventListener('click', pick_place);
    //document.querySelector('#food').addEventListener('click', compose_email);
    document.querySelector('#ancient-rome').addEventListener('click', load_site('ancient-rome'));
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
    // Show the site and hide other views
    document.querySelector('#showImgs').style.display = 'none';
    document.querySelector('#top-site').style.display = 'block';
    //document.querySelector('#emails-list').style.display = 'block';
    //document.querySelector('#oneEmail').style.display = 'none';

    // Show the site name
    document.querySelector('#siteName').innerHTML = `<h3>${site.title}</h3>`;

    // get emails
    //document.querySelector('#emails-list').innerHTML = "";
    //email_id = 0;

    fetch(`/sites/${site}`)
        .then(response => response.json())
        .then(sites => {
            if (sites.error) {
                console.log(sites.error)
                document.querySelector('#siteName').innerHTML = "Error: " + sites.error;
            }
            else {
                sites.forEach(site => {
                    // create separate div for each email
                    const element = document.createElement('div');
                    // show emails as read or unread

                    // build each email
                    element.innerHTML = `<p style="display:inline-block; width:20%;">${site.title}</p><p style="width:50%;">${site.description}</p><p>${site.category}`;

                    // add event listener for clicking on a site
                    element.addEventListener('click', function(e) {
                        document.querySelector('#oneEmail').style.display = 'block';
                        // show and hide buttons for different mailboxes
                        if (mailbox === 'inbox') {
                            document.querySelector('#email-buttons').style.display = 'block';
                            document.querySelector('#unarchive').style.display = 'none';
                        }
                        else if (mailbox === 'archive') {
                            document.querySelector('#email-buttons').style.display = 'none';
                            document.querySelector('#unarchive').style.display = 'block';
                        }
                        else if (mailbox === 'sent') {
                            document.querySelector('#email-buttons').style.display = 'none';
                            document.querySelector('#unarchive').style.display = 'none';
                        }
                        email_id = parseInt(email.id)
                        readEmail(email_id)
                    });
                    document.querySelector('#emails-list').append(element);
                })
            }
          })
          .catch(error => {
            console.log('Error:', error);
          });
    }

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