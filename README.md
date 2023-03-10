# MERN Flipkart Clone

This repository contains a clone of the popular Indian e-commerce website Flipkart. The project is built using the MERN (MongoDB, Express, React, Node.js) stack and includes Paytm payment integration.

## Live Preview

https://flipkart-clone-d124.onrender.com/

## Features

The project includes the following features:

User authentication (signup/login/logout)

* Product details page
* Product search
* Add to cart functionality
* Paytm payment integration for secure and fast payments
* Responsive design for mobile and desktop devices

## Getting Started
To get started with the project, clone this repository and follow the instructions below.

### Prerequisites
* Node.js (v12 or higher)
* MongoDB
* Paytm merchant account

### Installing

1. Install dependencies for the frontend and backend:
```bash
cd client && npm install
cd ../server && npm install
```
2. Create a .env file in the server directory and set the following environment variables:

```bash
DATABASE_URL=<your MongoDB connection string>
PAYTM_MERCHANT_KEY=<your Paytm merchant key>
PAYTM_MERCHANT_ID=<your Paytm merchant ID>
PAYTM_WEBSITE=<your Paytm website>
PAYTM_CALLBACK_URL=<your Paytm callback URL>
```

3.Start the backend server:

```bash
cd server && npm start
```

3.In a new terminal window, start the frontend:
```bash
cd client && npm start
```
## Built with 

### Front end

* React.js

* Styled Components

* Material Ui

### Back End

* [Node. js](https://nodejs.org)

* [Express. js](https://expressjs.com)

* [MongoDB](https://www.mongodb.com/)

* [mongoose](http://mongoosejs.com/)

* [dotenv](https://www.npmjs.com/package/dotenv)

* [body-parser](https://www.npmjs.com/package/body-parser)

### Text Editor

* [Visual Studio Code](https://code.visualstudio.com/)
