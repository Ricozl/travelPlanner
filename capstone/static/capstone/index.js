

document.addEventListener('DOMContentLoaded', function (event) {
    // by default, load all posts
    event.preventDefault();
    console.log("got to js page")

    document.querySelector('#topofpage').style.display = 'block';
    document.querySelector('#top-site').style.display = 'block';

});


function load_site(site) {
    console.log('got to load_site')
    // Show the site and hide other views
    document.querySelector('#sites').innerHTML = "";

    //document.querySelector('#messages').innerHTML = "";
    document.querySelector('#topofpage').style.display = "none";
    //document.querySelector('#nav-pics').style.display = 'none';
    document.querySelector('#top-site').style.display = 'block';
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

            if (data === undefined || data.length == 0) {
                document.querySelector('#sites').innerHTML = "No Sites Found";
            }
            else {
                for (let i = 0; i < data.length; i++) {
                    // create separate div for each site
                    const element = document.createElement('div');
                    element.innerHTML = `<h5 style="width:20%;">${data[i].title}</h5>`;

                    var opt = document.createElement("img");
                    opt.setAttribute('src', data[i].image_url);
                    //opt.setAttribute('Pick a date', 'alternate text');
                    opt.setAttribute('height', '80%');
                    opt.setAttribute('width', '60%');
                    opt.setAttribute('object-fit', 'cover');
                    element.appendChild(opt);

                    // build each site
                    const ele = document.createElement('p');
                    ele.innerHTML = `<p style="display:inline-block; width:50%;">${data[i].description}</p>`
                    element.appendChild(ele);
                    //const jump = document.createElement('span');
                    userName = document.getElementById('user_name')
                    if (userName) {
                        const jump = document.createElement('p');
                        //jump.innerHTML = `<p id="addfav" style="display:inline-block; padding:10px;">Click to add to Favorites  </p><img src="https://www.publicdomainpictures.net/pictures/40000/velka/red-heart-1362916005N5Z.jpg" style="width:20px; height:20px;">`;
                        jump.innerHTML = `<p id="addfav" style="display:inline-block; padding:10px;">Click to add to Favorites  </p><img src="static/capstone/red-heart.png" style="width:20px; height:20px;">`;
                        element.appendChild(jump);
                        // add event listener for clicking on a site
                        jump.addEventListener('click', function(e) {
                            const element = e.target;
                            console.log(element)
                            element.previousSibling.innerText = "Added Successfully!"
                         // update 'favorites' in database
                    //var post_id = parseInt(paginatedItems[i].id)
                            var site_id = parseInt(data[i].id)
                    //checkLike(post_id, counter)
                            title = data[i].title
                            console.log(title)
                            // update favorites table in database, set to active
                            msg = updateRecord(site_id)
                            console.log(msg)
                        })
                    }

                    document.querySelector('#sites').append(element);
                };
            console.log("got to focus")
            document.querySelector('#sitefocus').focus();
            }

        })
        .catch(error => {
            console.log('Error:', error);
        });
};

function updateRecord(site_id) {
    // update 'content' in database
    //post_id = parseInt(post_id)
    const csrftoken = getCookie('csrftoken');
    fetch(`/updateRecord/${site_id}`, {
        method: 'PUT',
        headers: {'X-CSRFToken': csrftoken},
        mode: 'same-origin',
        body: JSON.stringify({
            id: site_id,
            is_active: true
        })
    })
        .then(response => {
            if (!response.ok) {
                //document.querySelector("#siteName").innerHTML = "Updating post content in database was unsuccessful."
                console.log("response not ok")
            } else {
                console.log("response ok")
            }
        })
        .catch(error => {
            console.error("Error:", error);
        })
};


function favorites() {
    console.log('got to favorites');
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};


//function form() {
    //const [useState] = React
    //const [email, setEmail] = useState("")
    //const [password, setPassword] = useState("")

    //function handleSubmit(e) {
        //e.preventDefault()
        //console.log("email", email)
        //console.log("password", password)
    //}
    //return (
        //<form className="at-8 space-y-6" onSubmit=[handleSubmit]>
            //<div>
                //<label for="email-address"
                    //className="sr-only">Email Address</label>
                //<input id="email-address"
                    //name="email"
                    //type="email"
                    //autocomplete="off"
                    //required
                    //placeholder="Email address"
                    //value=[email]
                    //onInput=[(e) => setEmail(e.target.value)]
                    ///> is this one wrong?
            //</div>
            //<div>
                //<label for="password"
                    //className="sr-only">Password</label>
                //<input id="password"
                    //name="password"
                    //type="password"
                    //autocomplete="off"
                    //required
                    //placeholder="Password"
                    //value=[password]
                    //onInput=[(e) => setPassword(e.target.value)]
                    ///>
            //</div>
        //</form>
    //)
   //ReactDOM.render(<Form />, document.querySelector("#form"))
//};


Function load_map() {
    document.querySelector('#topofpage').style.display = 'none';
    document.querySelector('#top-site').style.display = 'none';
    document.querySelector('#backmap').style.display = 'block';
    // my apikey
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwLXVuNjIzIiwiYSI6ImNsamFsNmhxbjBjZmUzZ25sNGVlbDV6MXEifQ.JHQ6f3lO0v427Py_snS_Qg';

   const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [12.49723, 41.89281], // Rome starting position [lng, lat]
        zoom: 12 // starting zoom
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

         // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });
     map.on('load', () => {
        // Add an image to use as a custom marker
        map.loadImage(
            'https://ricozl-fantastic-zebra-7x6j7wp9p9fxg94-8000.preview.app.github.dev/static/capstone/mapbox-marker-icon-20px-green.png',

            //'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
            (error, image) => {
                if (error) throw error;
                map.addImage('marker2', image)

                map.addSource('places', {
                // This GeoJSON contains features that include an "icon"
                // property. The value of the "icon" property corresponds
                // to an image in the Mapbox Streets style's sprite.
                'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        //'<strong>Trevi Fountain</strong><p><a href="#sidebar" target="_blank" title="Opens in a new window">Visit the Trevi Fountain</a> where a coin tossed over your shoulder will guarantee your return to Rome.</p>',
                                        '<strong>Trevi Fountain</strong><p>Visit the Trevi Fountain where a coin tossed over your shoulder will guarantee your return to Rome. For more, see Attractions</p>',
                                    //'icon': 'marker2',
                                    //'iconSize': [60, 60]
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.483239912221268, 41.90110677437803]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>The Pantheon</strong><p>Built during Ancient Rome, the Pantheon sits in a lively square with cafes all around.</p><a href="https://www.pantheonroma.com/home-eng/" target="_blank" title="Opens in a new window" id="#pic">For more about the Pantheon</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.476883623407923, 41.89882638667701]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>The Roman Forum</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',

                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.485280192982373, 41.892672638458635]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Piazza Navona</strong><p>The Piazza Navona is a favorite place for both Romans and visitors to sit and watch the world go by.</p><a href="https://www.archeoroma.org/sites/piazza-navona/" target="_blank" title="Opens in a new window" id="#pic">For more about the Piazza Navona</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.482314462326206, 41.905896737858676]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Monument to Victor Emmanuele II</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',

                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.483073717584107, 41.89477827501808]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Testaccio Market</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
                                    //'iconSize': [20, 20]
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.4759422, 41.8774635]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Basilica of San Clemente</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
                                    //'iconSize': [30, 30]
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.497543508066062, 41.88954233109117]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Basilica di Santa Maria in Trastevere</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
                                    //'iconSize': [30, 30]
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.46965961423719, 41.8894937098454]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Castel Sant Angelo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
                                    //'iconSize': [30, 30]
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.466340367584765, 41.90328675682885]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Colosseum</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
                                    //'iconSize': [30, 30]
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.492230894572035, 41.89042581503916]
                                }
                            }
                        ]
                    }
                });
                // Add a layer showing the places.
                map.addLayer({
                    'id': 'places',
                    'type': 'symbol',
                    'source': 'places',
                    'layout': {
                        'icon-image': 'marker2',
                        'icon-size': 1,
                        'icon-allow-overlap': true,
                    },

                });

            });
             // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', () => {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
        });
    });
};