My final project is a travel website about Rome, Italy. As outlined in the specs, The program uses the Django framework, Python on the back-end and Javascript on the front-end. My web application is mobile-responsive. It has four models: the User model, Categories, Sites, and Favorites. Most of the website is designed as a single-page application, with the exception of the Map of Rome and the Quiz which each have their own html pages. I have created my own favicon icon for this website.

Homepage
The homepage design consists of a parallax scrolling effect using CSS. Parallax scrolling is where the background content (i.e. an image) is moved at a different speed than the foreground content (in this case, bands of text) while scrolling. I have adjusted the opacity of the images to make them better serve as a background to a more readable text. Since parallax scrolling does not always work on mobile devices/smart phones, I have used media queries to turn off the effect on mobile devices.

The Principal Navigation Bar
For a navigation bar at the top of the page, I have used tabbed navigation to display choices to the User.
The openCity() function is called when the user clicks on one of the buttons in the menu. When the User chooses one of the categories presented from "Where to Go" or "Places to Eat", the User is taken to a grid of images that is the secondary navigation at the bottom of the page where the option chosen is focused on. Here there are nine clickable images with category labels. When the User clicks on one, all of the options (images and text) in that category are displayed, including "Add to Favorites" and "Remove from Favorites" links at the bottom of each.


Map of Rome page
The map of Rome has its own html page because it is using an external API to create the map. This page and the quiz page also have a secondary navigatioon bar. The map is created using Mapbox. The site markers are created using XXX. Clicking on a marker brings up a pop-up window with information and a link to an external webpage,opened in a window without leaving the Rome Travel Website.

The Quiz page
The quiz has its own html page which is created using REACT. The quiz is an interactive page in which the user inputs hiw answer and sees results immediately. Only signed-in users can access it.

The Favorites page XXX
This page is part of the single-page application, using javascript as the front end and python for the back end. Only signed-in users can access it. i've used a model and the "add and remove" are contained in the sites in the main program. The favorites page accesses the database and displays the favorites chosen by the signed-in user.