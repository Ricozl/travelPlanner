

document.addEventListener('DOMContentLoaded', function (event) {
    // by default, load all
    event.preventDefault();
    console.log("got to js page")

    //document.getElementById("remFav").addEventListener("click", removeFav(event));
    //document.querySelector('#topofpage').style.display = 'block';
    //document.querySelector('#top-site').style.display = 'block';
});


function load_site(site) {
    console.log('got to load_site')
    // Show the site and hide other views
    document.querySelector('#sites').innerHTML = "";

    document.querySelector('#topofpage').style.display = "none";
    document.querySelector('#top-site').style.display = 'block';
    console.log({site})
    // Show the site name
    document.querySelector('#siteName').innerHTML = `<h3>${site}</h3>`;

    fetch(`/sites/${site}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
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
                        jump.innerHTML = `<p id="addfav" style="display:inline-block; padding:10px;">Click to add to Favorites  </p><img src="static/capstone/red-heart.png" style="width:20px; height:20px;">
                            <p id="remfav" style="display:inline-block; padding:10px;">Click to remove from Favorites  </p><img src="static/capstone/red-heart.png" style="width:20px; height:20px;">`;
                        //let html = `<button class="follow" id="follow" style="margin:10px;">Follow</button><button class="unfollow" id="unfollow">Unfollow</button>`;
                            //const btn = document.getElementById('lastp')
                        element.appendChild(jump);
                        // add event listener for addFav or remFav
                        //jump.addEventListener('click', event => {
                            //checkRecord(event)
                        //});
                            //btn.insertAdjacentHTML("afterend", html)jump.innerHTML = `<p id="addfav" style="display:inline-block; padding:10px;">Click to add to Favorites  </p><img src="static/capstone/red-heart.png" style="width:20px; height:20px;">`;
                   // };

                        //element.appendChild(jump);
                        // add event listener for clicking on a site
                        jump.addEventListener('click', function(e) {
                            const element = e.target;
                            console.log(element)
                            element.previousSibling.innerText = "Added Successfully!"
                         // update 'favorites' in database
                            //var site_id = parseInt(data[i].id)

                            //title = data[i].title
                            //console.log(title)
                            // update favorites table in database, set to active
                            //activity = "true"
                            //msg = updateRecord(site_id)
                            //console.log(msg)
                        })
                    }
                    document.querySelector('#sites').append(element);
                    //})
                }
        //};
            console.log("got to focus")
            document.querySelector('#sitefocus').focus();
        }

        .catch(error => {
            console.log('Error:', error);
        });
    }
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
            is_active: true,
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


function removeFav(event) {
    console.log('got to favorites');
    console.log(event)
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


