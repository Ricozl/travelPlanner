document.addEventListener('DOMContentLoaded', function (event) {
    // by default, load all posts
    event.preventDefault();
    //load_page('all_posts');
    console.log("got to js page")
    //document.querySelector("#message").innerHTML = "Got to index.js"

    // toggle between buttons
    document.querySelector('#food').addEventListener('click', compose_email);
});

function compose_email() {
    // Show compose view and hide other views
    document.querySelector('.img1').style.display = 'none';
    //document.querySelector('#emails-list').style.display = 'none';
    //document.querySelector('#oneEmail').style.display = 'none';
    //document.querySelector('#compose-view').style.display = 'block';
};