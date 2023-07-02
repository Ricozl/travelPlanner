

document.addEventListener('DOMContentLoaded', function (event) {
    // by default, load all posts
    event.preventDefault();
    //load_page('all_posts');
    console.log("got to js page")

    //document.querySelector("#message").innerHTML = "Got to index.js"
    document.querySelector('#newPage').style.display = 'none';
    document.querySelector('#sites').style.display = 'none';

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
    document.querySelector('#sites').style.display = 'block';
    //document.querySelector('#emails-list').style.display = 'block';
    //document.querySelector('#oneEmail').style.display = 'none';

    // Show the site name
    document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;

    // get emails
    document.querySelector('#emails-list').innerHTML = "";
    email_id = 0;

    fetch(`/sites/${site}`)
        .then(response => response.json())
        .then(emails => {
            if (emails.error) {
                console.log(emails.error)
                document.querySelector('#emails-view').innerHTML = "Error: " + emails.error;
            }
            else {
                emails.forEach(email => {
                    // create separate div for each email
                    const element = document.createElement('div');
                    // show emails as read or unread
                    if (email.read === true) {
                        element.style.backgroundColor = "lightgray"
                    }
                    else {
                        element.style.backgroundColor = "white";
                    }
                    // build each email
                    element.innerHTML = `<p style="display:inline-block; width:20%;">${email.sender}</p><p style="width:50%;">${email.subject}</p><p>${email.timestamp}</p>`;

                    // add event listener for clicking on an email
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