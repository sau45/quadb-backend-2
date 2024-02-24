# Hodlinfo Clone

## [Deployed Live Server Link](https://quadb-backend-2.onrender.com)


## Project Overview

This project serves as the backend application for managing cryptocurrency data. It provides functionalities for fetching the top 10 results from the WazirX API, storing them in a PostgreSQL database, and serving the data to the frontend. The application ensures data integrity and security by using a database to store the fetched data and serving it to the frontend as required.

## Features

- **Fetch Data:** Fetches the top 10 results from the WazirX API and stores them in the database.
- **Display Data:** Displays the stored data on the frontend webpage, similar to hodlinfo.com.
- **Responsive Design:** Responsive design to ensure the webpage looks good on different devices..


## Tech Stack

- Node.js
- Express
- PostgreSQL
- HTML
- CSS
- javascript
- React js
- Tailwind css
- Npm Library


## Application Structure

The application follows a MVC architecture:

- **Controllers:** Responsible for managing user authentication and note-related operations, respectively.
- **Models:** Define the data structure for PostgreSQL, representing the schema for user information and cryptocurrency data.
- **Routes:** Express routes handle incoming HTTP requests and delegate them to the appropriate controllers.
- **Middleware:** Custom middleware, such as authentication middleware, is used for additional functionalities.

## Setup in Local Environment

   Follow these steps to set up the project locally:

  ### Prerequisites
   - Node.js installed on your machine
   - Postgresql Set up

### Steps
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/sau45/quadb-backend-2.git
   

2. **Install Dependencies:**
   - npm install

3. **Set Up Environment Variables:**
   - Create a .env file in the project root and add the following variables:

    POSTGRES_URL=
    PORT=8080

    Replace your_secret_key with  your_postgresql_connection_string with the connection string for your postgresql database.

4. **Run the Application:**
   
   -npm start

    The application should now be running  http://localhost:8080.

5. **API Endpoints:**

Explore the API endpoints using tools like Postman. Refer to the API documentation or Postman Collection for detailed information on each endpoint.

Here is in brief collection of API end points:
 
 1. **Fetch WazirX API**
   
   - End Points: Get /api/tickers/data
   - Description : Fetching the data from WazirX api

2. **Storing the Data to Postgresql**
  - End Points : Post /api/tickers
  - Description : it is helping to store the data to  postgresql

  


## Database Schema Format

The database schema includes a table ticker_data to store the top 10 results from the WazirX API:


## License

This project is licensed under the [MIT License](LICENSE).



