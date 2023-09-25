# Capstone
***
My final project is a travel website about Rome, Italy called **ROME TRAVEL**. The website presents images and information about activities to enjoy in Rome, organized in nine categories: Attractions, Gelaterie, Museums, Food & Caffes, Markets, Parks, Churches, Ancient Rome, and Shopping.

When a category is clicked on, all of the options (images and text) in that category are displayed. If the user is signed-in, there are links for "Add to Favorites" and "Remove from Favorites" at the bottom of each site. If the user clicks "Add to Favorites", there will be a message that the site is in Favorites. If the user clicks "Remove from Favorites", there will be a message that the site is not in Favorites.

### Favorites Page ###
The User can choose **Favorites** from the navigation bar to see all the sites in their favorites list. This page is only available to signed-in Users.

### Map of Rome using Mapbox.com API
A User who is not signed-in can see all of these sites and access a Map of Rome to see where they are located. The map is created using the Mapbox.com API and has it's own html page. Mapbox GL JS is a client-side JavaScript library for building web maps and web applications with Mapbox's modern mapping technology. The map can be zoomed in and out. There are markers at the site locations that, when clicked, display a pop-up window with information and a link to an external webpage that opens in a window without leaving the Rome Travel Website. This map uses geojson data for the coordinates to place the markers, and to load a description of each site.

### Rome Quiz written in React
When a User signs in, they have access to a **Quiz** written in React which has it's own html page. The Quiz is interactive; the User is shown the first question and chooses from a list of multiple-choice answers. React updates and renders components when data changes. Once answered, the question is immediately changed to the next one and the User's score is updated. When they have answered all five questions, they are shown their score and told whether they have won or not.

## Specs
* The program uses the Django framework, Python on the back-end and Javascript on the front-end.
* It has four models: the User model, Categories, Sites, and Favorites.
* The Home page is designed as a single-page application. The **Map of Rome**, the **Quiz** and the **Favorites** page each have their own html pages.
* The web application is mobile-responsive.
* I have created my own favicon icon for this website.

## Files
* layout.html = tabbed navigation for Home page
* index.html = 
* mapPlaces.html

### Distinctiveness and Complexity
This project is not based on any other projects in this course. There is no e-commerce involved, no creating posts or comments or following posters. There is a Favorites page which I don't believe is too much. The complexity is in the way the information is presented, including interweaving the Mapbox API to create a Map of Rome, as well as an interactive Quiz written in React. I wanted to use the tools available to create a dynamic website that is engaging - not dull. The overall design of the website has been created to maintain a cohesive look throughout, as well as bringing variety and interest to each page. The inclusion of a Favorites page means the User can maintain a list of what they like, add and subtract from it, and return to it whenever they are signed in. The interactive quiz about Rome can be re-taken as many times as the User wants to. It introduces React (which is new to me) to the website.

The complexity of the website is enhanced by using CSS effects to make the website visually appealing and lively. The **Home Page** design consists of a parallax scrolling effect using CSS. Parallax scrolling makes the background content (here, several images) move at a different speed than the foreground content (in this case, bands of text) while scrolling. I have adjusted the opacity of the images to make them better serve as a background to a more readable text. Since parallax scrolling does not always work on mobile devices/smart phones, I have used media queries to turn off the effect on mobile devices.

Another area of complexity is in the use of different **Navigation** elements. For a navigation bar at the top of the page, I have used **tabbed navigation** to display choices to the User. The openCity() function is called when the user clicks on one of the buttons in the menu. When the User chooses one of the categories presented from "Where to Go" or "Places to Eat", the User is taken to a second level of navigation: **a grid of nine clickable images** with category labels at the bottom of the page where the option chosen is focused on. When the User clicks on one, the database is accessed for that category and the items in the category are displayed. The User can keep clicking on the images to see what is offered in each category. The other options in the top Navigation bar take the User to the respective pages directly.

I have opted for a responsive **horizontal navigation bar** for the Map of Rome page, the Quiz page, and the Favorites page.


