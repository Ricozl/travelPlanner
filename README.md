# Capstone
***
My final project is a travel website about Rome, Italy called ROME TRAVEL. The website presents images and information about activities to enjoy in Rome, organized in nine categories: Attractions, Gelaterie, Museums, Food & Caffes, Markets, Parks, Churches, Ancient Rome, and Shopping.

When a category is clicked on, all of the options (images and text) in that category are displayed. If the user is signed-in, there are links for "Add to Favorites" and "Remove from Favorites" at the bottom of each site. If the user clicks "Add to Favorites", there will be a message that the site is in Favorites. If the user clicks "Remove from Favorites", there will be a message that the site is not in Favorites.

### Favorites Page ###
The User can choose **Favorites** from the navigation bar to see all the sites in their favorites list. This page is only available to signed-in Users.

### Map of Rome using Mapbox.com API
A User who is not signed-in can see all of these sites and access a Map of Rome to see where they are located. The map is created using the Mapbox.com API and has it's own html page. The map can be zoomed in and out. There are markers at the site locations that, when clicked, display a pop-up window with information and a link to an external webpage that opens in a window without leaving the Rome Travel Website. This map uses geojson data for the coordinates to place the markers, and to load a description of each site.

### Rome Quiz written in React
When a User signs in, they have access to a **Quiz** written in React which has it's own html page. The Quiz is interactive; the User chooses from a list of multiple-choice answers and immediately sees their score. Once answered, the question is immediately changed to the next one. When they have answered all five questions, they are shown their score and told whether they have won or not.

## Specs
* The program uses the Django framework, Python on the back-end and Javascript on the front-end.
* It has four models: the User model, Categories, Sites, and Favorites.
* The Home page is designed as a single-page application. The **Map of Rome**, the **Quiz** and the **Favorites** page each have their own html pages.
* The web application is mobile-responsive.
* I have created my own favicon icon for this website.

### Distinctiveness and Complexity
This project is not based on any other projects in this course. There is no e-commerce involved, no creating posts or comments or following posters. There is a Favorites page which I don't believe is too much. The complexity is in the way the information is presented which has been detailed in the above paragraphs, including using the Mapbox API to create a Map of Rome with even more information available to the User. The overall design of the website has been created to maintain a cohesive look throughout, as well as bringing variety and interest to each page. The Favorites page means the User can maintain a list of what they like and add and subtract from it. For fun, I've created an interactive quiz about Rome written in React (which is new to me).

The complexity of the website is enhanced by using CSS effects to make the website visually appealing and lively. The **Home Page** design consists of a parallax scrolling effect using CSS. Parallax scrolling makes the background content (here, several images) move at a different speed than the foreground content (in this case, bands of text) while scrolling. I have adjusted the opacity of the images to make them better serve as a background to a more readable text. Since parallax scrolling does not always work on mobile devices/smart phones, I have used media queries to turn off the effect on mobile devices.

Navigation
For a navigation bar at the top of the page, I have used tabbed navigation to display choices to the User.
The openCity() function is called when the user clicks on one of the buttons in the menu. When the User chooses one of the categories presented from "Where to Go" or "Places to Eat", the User is taken to a grid of images that is the secondary navigation at the bottom of the page where the option chosen is focused on. Here there are nine clickable images with category labels. When the User clicks on one, the database is accessed for that category. I have opted for a responsive horizontal navigation bar for the Map of Rome page and the Quiz page.


