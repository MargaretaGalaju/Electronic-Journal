# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/MargaretaGalaju/Electronic-Journal.git

This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:

    cd angular-material-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200, but you need to use HTTPS - [https://localhost:4200](https://localhost:4200)

This application uses a self-signed certificate, so you will need to accept it using the browser. If you are using Chrome, you will need to click Advanced and then choose "Proceed to localhost".
