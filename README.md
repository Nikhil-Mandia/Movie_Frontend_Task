# Movie Search and Favourites App - Frontend  

This is the frontend of the **Movie Search and Favourites App**, built using **React.js** and styled with **Bootstrap 5**. The app allows users to search for movies or TV shows using the OMDB API and save their favourites.  

## Features  

1. **Search Page**:  
   - Users can search for movies or TV shows using keywords.  
   - Displays a list of results with the title, year, type, and poster image.  
   - Includes a "Favourite" button to save movies/TV shows to the database.  

2. **Favourites Page**:  
   - Displays all the saved favourite movies/TV shows.  
   - Data is fetched from the database.  

---

## Technologies Used  

- **React.js**: Framework for building the frontend.  
- **Bootstrap 5**: For responsive UI styling.  
- **Axios**: For making API calls to the OMDB API.  
- **React Router**: For navigation between pages.  

---

## Getting Started  

### Prerequisites  

Make sure you have the following installed:  
- **Node.js** (v16 or higher)  
- **npm** or **yarn**  

---

### Installation  

1. **Clone the Repository**:  
   ```bash
   git clone <repository-url>
   cd frontend

2 Install Dependencies:
  npm install


3 Set Up Environment Variables:

4 Create a .env file in the project root.
  Add the following environment variables:

 REACT_APP_API_KEY=your_omdb_api_key
 REACT_APP_BACKEND_URL=http://localhost:5100



5 Run the Development Server:

 npm start

Open the app in your browser at http://localhost:3000.


API Endpoints
OMDB API
Base URL: http://www.omdbapi.com

Search Movies/TV Shows:

Endpoint: /
Method: GET
Query Parameters:
apikey: Your OMDB API key
s: Search keyword

Backend API
Save Favourite:

Endpoint: /movie
Method: POST


Get Favourites:
Endpoint: /movie
Method: GET

Additional Notes
Ensure the backend server is running to save and fetch favourites.
OMDB API calls may be rate-limited for free accounts.

Author
Developed by Nikhil Mandia.


This README provides all necessary information for setting up and running the frontend. Let me know if you need additional adjustments!
