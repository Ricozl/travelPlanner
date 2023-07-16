

document.addEventListener('DOMContentLoaded', function (event) {
    // by default, load all posts
    event.preventDefault();
    //load_page('all_posts');
    console.log("got to js page")

    //document.querySelector("#message").innerHTML = "Got to index.js"
    //document.querySelector('#newPage').style.display = 'none';
    document.querySelector('#topofpage').style.display = 'block';
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

    //document.querySelector('#messages').innerHTML = "";
    document.querySelector('#topofpage').style.display = "none";
    //document.querySelector('#nav-pics').style.display = 'none';
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
                    const jump = document.createElement('span');
                    jump.innerHTML = `<span><p id="addfav" style="display:inline-block; padding:10px;">Click to add to Favorites  <img src="https://www.publicdomainpictures.net/pictures/40000/velka/red-heart-1362916005N5Z.jpg" style="width:20px; height:20px;"></p></span>`;

                    element.appendChild(jump);
                    // add event listener for clicking on a site
                    jump.addEventListener('click', function(e) {
                        const element = e.target;
                        console.log(element)
                        element.previousSibling.innerText = "Added Successfully!"

                    });

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

