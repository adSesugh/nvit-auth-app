## Task 1 - Manifest Project
Task to create user authentication and user profile page

### Description

1. User signUp, 
2. User login,
3. Handle user forgot password, 
4. User profile page

### Tech stack

- Laravel
- PGSQL Database
- React via Inertia.js

### Usage
Follow the step below to setup the app for testing in your local PC;

1. Clone the repository `git clone https://github.com/adSesugh/nvit-auth-app.git`

2. To install app dependencies, change to the project root directory and run `composer install`

3. Make a copy of .env.example file by changing to the root directory of your folder and `cp .env.example .env`

4. `php artisan key:generate` to generate a key for your the app for without which app won't run.

5. Update the database connection and Mail section of the `.env` base on your preference.

6. Once all the steps above is carried, change to the project root directory and run `php artisan serve`. 
    However, you can choose to install all node modules using `yarn` or `npm install` and then `yarn dev` or `npm run dev`. In short use the following when in the project root directory;
        - For yarn - `yarn && yarn dev`
        - For npm - `npm install && npm run dev`

### Accessing from the browser

If you are using vite way of serving the app to the web then run `yarn dev` or `npm run dev` to start the app and use `http://localhost:5173` to view the app in the browser. However, when using normal laravel integrated server i.e `php artisan serve`, use `http://localhost:8000` to view app in the browser. 

#### NB
The following must have been installed and configure on your PC;
1. php
2. composer
3. Database of choice -- [`mysql`, `postgres`, `mssql`] or an sqlite db file.
4. yarn or npm (package manager tools)

#### Screenshots
1. SignUp Form
    ![SignUp Form](https://github.com/adSesugh/nvit-auth-app/screenshots/signup.png, "SignUp Form")

