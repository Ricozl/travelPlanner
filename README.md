My final project is a travel website about Rome, Italy. As outlined in the specs, The program uses the Django framework with Python on the back-end and Javascript on the front-end. My web application is mobile-responsive. It has four models:

The homepage design consists of a CSS parallax view. I have adjusted the opacity of the images in the parallax view to make them serve as a background to a more readable text.

The parallax viewis followed by a grid of images that is secondary navigation to sites grouped by topic. The images are internal links to pages of text and additional images with more information about each site.

The principal navigation bar XX
I have created my own favicon icon for this website. I'm using a single-page application for the front end with the exceptions of the Map of Rome and the Quiz.

Map of Rome page
The map of Rome has its own html page because it is using an external API to create the map. This page and the quiz page also have a secondary navigatioon bar. The map is created using Mapbox. The site markers are created using XXX. Clicking on a marke brings up a pop-up window with information and a link to an external webpage. This external website is opened in a window without leaving the Rome Travel Website.

The Quiz page
The quiz has its own html page which is created using REACT. The quiz is an interactive page in which the user inputs hiw answer and sees results immediately.

The Favorites page XXX
This page is built using javascript as the front end and python for the back end. The users can add or remove a favorite from their list. i've used a model and the "add and remove" are contained in the sites in the main program. The favorites page accesses the database and displays the favorites model data.