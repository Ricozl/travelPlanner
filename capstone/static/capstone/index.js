

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


<script>
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
                                