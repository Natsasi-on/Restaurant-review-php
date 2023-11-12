<h1 align="center">Restaurant Reviews Website</h1>

<p align="center">
    Explore and review your favorite restaurants with our intuitive restaurant reviews website.
    <br>
    <a href="restaurant-review.great-site.net">[ Live Website ]</a>
</p>

## Project Overview
This project is a restaurant reviews website designed to help users discover and review various restaurants. It provides a user-friendly interface for exploring restaurant details, including addresses, summaries, and ratings.

## Key Features
Here are some of the key features of our website:

- **Dynamic Loading**: The website dynamically loads restaurant information upon page load using AJAX requests to the server.

- **Data Population**: PHP scripts fetch restaurant data from the restaurant_review.xml file and respond with a JSON string of restaurant information.

- **Dropdown Population**: The received data is used by JavaScript to populate the dropdown list for restaurant names.

- **Detailed Information**: Users can select a restaurant from the dropdown list, triggering an AJAX request for detailed information.

- **Server-Side Handling**: PHP scripts handle requests by retrieving details from the restaurant_review.xml file and responding with a JSON string containing restaurant details.

- **Interactive UI**: JavaScript displays the selected restaurant's address, summary, and rating, with the rating presented as a dropdown list.

- **User Modifications**: Users can modify the restaurant's address, summary, and select a different rating from the dropdown list.

- **Save Functionality**: When the user clicks the Save button, RestaurantReviews.js makes an AJAX request to the server, sending revised restaurant data in a JSON string.

- **Data Update**: Users can update the restaurant data and save the changes back to the restaurant_review.xml file.

- **Feedback to User**: RestaurantReviews.php sends a message in a JSON string to inform the user whether the saving is successful or not.

## Technologies Used
This project leverages the following technologies:

- **HTML**: The foundation of web development used for structuring the website's content and layout.
- **CSS**: The styling language used to enhance the visual appeal and design of the website.
- **JavaScript (with jQuery)**: Used for front-end interactivity, making AJAX requests, and dynamically updating the UI.
- **PHP**: Employed for server-side scripting, handling requests, and updating data in the XML file.

## Skills Utilized
In the process of creating this website, we utilized the following skills:

- **Back-End Development**: Implementing server-side logic, handling requests, and updating data using PHP.
- **XML Data Handling**: Reading and updating data from an XML file to dynamically load and save restaurant information.
- **AJAX Integration**: Making asynchronous requests for a seamless user experience.
- **Web Security**: Ensuring secure and validated data transactions between the front end and back end.

## Get Started
Feel free to explore the live website for a firsthand experience of the Restaurant Reviews website!

For more details, visit the [Live website](restaurant-review.great-site.net).

## License
This project is licensed under the YourLicenseName License - see the [LICENSE.md](LICENSE) file for details.

## Contact
If you have any questions or feedback, please don't hesitate to reach out to us at [your.email@example.com](mailto:your.email@example.com).

Enjoy exploring and reviewing restaurants with our website!
