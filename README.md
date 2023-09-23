# Capstone
***
My final project is a travel website about Rome, Italy called ROME TRAVEL. The website presents images and information about activities to enjoy in Rome, organized in nine categories: Attractions, Gelaterie, Museums, Food & Caffes, Markets, Parks, Churches, Ancient Rome, and Shopping. By clicking on one of the categories, the User can see images and more detailed information about each offering.

A User who is not signed-in can see all of these sites and access a Map of Rome to see where they are located. The map is created using the Mapbox.com API. The map can be zoomed in and out. There are markers at the site locations that, when clicked, display a pop-up window with info about the site. Also a link to an exterior webpage that opens in a window without leaving the website.

When a User signs in, they have access to a Rome Quiz written in React. The quiz is interactive; the User chooses from a list of multiple-choice answers and immediately sees their score. When they have answered all five questions, they are shown their score and told whether they won or not.

As outlined in the specs, The program uses the Django framework, Python on the back-end and Javascript on the front-end. My web application is mobile-responsive. It has four models: the User model, Categories, Sites, and Favorites. Most of the website is designed as a single-page application, with the exception of the Map of Rome and the Quiz which each have their own html pages. I have created my own favicon icon for this website.

Homepage
The homepage design consists of a parallax scrolling effect using CSS. Parallax scrolling is where the background content (i.e. an image) is moved at a different speed than the foreground content (in this case, bands of text) while scrolling. I have adjusted the opacity of the images to make them better serve as a background to a more readable text. Since parallax scrolling does not always work on mobile devices/smart phones, I have used media queries to turn off the effect on mobile devices.

Principal Navigation
For a navigation bar at the top of the page, I have used tabbed navigation to display choices to the User.
The openCity() function is called when the user clicks on one of the buttons in the menu. When the User chooses one of the categories presented from "Where to Go" or "Places to Eat", the User is taken to a grid of images that is the secondary navigation at the bottom of the page where the option chosen is focused on. Here there are nine clickable images with category labels. When the User clicks on one, the database is accessed for that category.

Sites
When a category is clicked on, all of the options (images and text) in that category are displayed. If the user is signed-in, there are links for "Add to Favorites" and "Remove from Favorites" at the bottom of each site. If the user clicks "Add to Favorites", there will be a message that the site is in Favorites. The user can choose Favorites from the navigation bar to see all the sites in their favorites list.

Map of Rome page
The map of Rome has its own html page because it is using an external API to create the map. This page and the quiz page also have a secondary navigatioon bar. The map is created using Mapbox. The site markers are created using XXX. Clicking on a marker brings up a pop-up window with information and a link to an external webpage,opened in a window without leaving the Rome Travel Website.

The Quiz page
The quiz has its own html page which is created using REACT. The quiz is an interactive page in which the user inputs hiw answer and sees results immediately. Only signed-in users can access it.

The Favorites page XXX
This page is part of the single-page application, using javascript as the front end and python for the back end. Only signed-in users can access it. i've used a model and the "add and remove" are contained in the sites in the main program. The favorites page accesses the database and displays the favorites chosen by the signed-in user.