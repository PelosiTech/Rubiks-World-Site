# Rubiks-World-Site
*By Carlo Pelosi - [Visit Rubiks-World-Site](https://rubiks-world.herokuapp.com)*
## My Goat.com Clone
**Browse Different brands of Rubiks Cubes**

**Table of Contents**
* [Rubiks-World Overview](#Rubiks-World-overview)
* [Demonstrations](#demonstrations)
* [App Description](#app-description)
* [Technologies](#technologies)


# Rubiks-World overview
The application is built off a handmade API backend using Flask of popular cubes, while the front end is maintained by react and redux. Rubiks World is a basic modern retail website for rubiks cubes.

# Demonstrations

## Landing Page: 
<img width="600" src="https://i.gyazo.com/5ba6647e88d561a682c1f5e0d12587a3.png">

## Log In:
<img width="600" src="https://i.gyazo.com/ca4d13d3cd48947f75f7a83726c3c956.png">

## Browse cube:
<img width="600" src="https://i.gyazo.com/4c4257da64590bb18d4e8ff975118839.png">

## View cube:
<img width="600" src="https://i.gyazo.com/7e52de6c3152c46a3c80622a0991ee56.png">

## Add To Cart:
<img width="600" src="https://i.gyazo.com/c02856707ba69835df2d432808009d0e.png">

# App Description
-   Full stack application utilizing state management and a handmade custom API backend.  
-   A goat clone look-alike but with a cube spin.  
-   A working cart with redux persists.  

# Define Database Functionality + Input Data
1.  Redux persist stores User info and cubes added to cart.  
2.  User authentication provided by csrf and JWT token.  
3.  Search querying done but using redux state managament and running a filter method on the array.  

# Tools
-   VS Code
-   Google Chrome Redux Dev tools
-   GitHub
-   handemade API
-   Url references to beach cube stored in database

# Technologies
-   Deployment: Docker / Heroku
-   Frontend UI engine: React / Redux
-   Backend server: Python / Flask
-   RDBMS: PostgresSQL v12
-   ORM: SQLAlchemy 
 

# Database Structure

## Tables

* Users
    * id - INTEGER-PRIMARY_KEY
    * username - STRING(50)
    * hashedPassword - STRING(40)
    * email - STRING(100)


## Features / MVP

* User Authentication / CSRF / JWT
* query database of different Rubik Cube's
* add item to cart and have cart link to account
* additional querying high to low
* featured category

# Flask React Project

This is the backend for the Flask React project.

## Getting started

1. Clone this repository

```bash
git clone https://github.com/PelosiTech/Rubiks-World-Site
```

2. Install dependencies
   ```bash
   pipenv install --dev -r dev-requirements.txt --python=python3 && pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   python -m database && flask run
   ```
6. To run the React App in development, checkout the [README](./client/README.md) inside the client directory.




***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:
   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***


## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run
   ```bash
   heroku login
   ```
5. Login to the heroku container registry
   ```bash
   heroku container:login
   ```
6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry
   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```
8. Release your docker container to heroku
   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```
9. set up your database:
   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} python -m database
   ```
10. Under Settings find "Config Vars" and add any additional/secret .env variables.
11. profit
