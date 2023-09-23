

document.addEventListener('DOMContentLoaded', function(event) {
    // by default, load all
    event.preventDefault();
});
   // Use navigation button to load 'all posts'
   document.querySelector('#all_posts').addEventListener('click', function(event) {
    event.preventDefault();
    load_page('all_posts')
});

function load_site(site) {
    // Show the site and hide other views
    document.querySelector('#sites').innerHTML = "";

    document.querySelector('#topofpage').style.display = "none";
    document.querySelector('#top-site').style.display = 'block';
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
                        jump.innerHTML = `<p id="addfav" style="display:inline-block; padding:10px;">Click to add to Favorites  </p><img src="static/capstone/red-heart.png" style="width:20px; height:20px;">`;
                        element.appendChild(jump);

                        // add event listener for clicking on a site
                        jump.addEventListener('click', function(e) {
                            const element = e.target;
                            element.previousSibling.innerText = "Site is in your Favorites List!"

                            // update 'favorites' in database
                            var site_id = parseInt(data[i].id)
                            title = data[i].title
                            // update favorites table in database, set to active
                            activity = true
                            updateRecord(site_id, activity)
                        })
                        const jumptwo = document.createElement('p');
                        jumptwo.innerHTML = `<p id="remfav" style="display:inline-block; padding:10px;">Click to remove from Favorites  </p><img src="static/capstone/open-heart.png" style="width:20px; height:20px;">`;
                        element.appendChild(jumptwo);

                        // add event listener for clicking on a site
                        jumptwo.addEventListener('click', function(e) {
                            const element = e.target;
                            element.previousSibling.innerText = "Site is not in your Favorites List!"
                            // update 'favorites' in database

                            var site_id = parseInt(data[i].id)
                            title = data[i].title
                            // update favorites table in database, set to active
                            activity = false
                            updateRecord(site_id, activity)
                        })
                    }
                    document.querySelector('#sites').append(element);
                }
                document.querySelector('#sitefocus').focus();
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

};

function updateRecord(site_id, activity) {
    // update 'content' in database
    const csrftoken = getCookie('csrftoken');
    fetch(`/updateRecord/${site_id}`, {
        method: 'PUT',
        headers: { 'X-CSRFToken': csrftoken },
        mode: 'same-origin',
        body: JSON.stringify({
            id: site_id,
            is_active: activity,
        })
    })
        .then(response => {
            if (response.ok) {
                console.log("update was successful.")
            }
        })
        .catch(error => {
            console.error("Error:", error);
        })
};

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


