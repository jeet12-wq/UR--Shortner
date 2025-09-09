A simple and efficient URL Shortener built with Node.js, Express, and MongoDB.
This project allows users to generate short and shareable links that redirect to long URLs, while also tracking usage statistics such as visit history.

✨ Features

Generate unique short URLs for any valid link

Redirect seamlessly to the original long URL

Store and manage shortened links in a MongoDB database

Track visit history and analytics (timestamps of visits)

RESTful API design for easy integration

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Utilities: shortid (or nanoid) for unique ID generation.


# Clone the repo
git clone https://github.com/your-username/url-shortener.git

# Navigate into the project
cd url-shortener

# Install dependencies
npm install

# Start the server
npm run start
