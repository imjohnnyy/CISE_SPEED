require("dotenv").config({path: "./config.env"})
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const cors = require("cors");
const books = require('./routes/api/books.js');


const app = express();
// app.use(cors());
// app.use(cors({ origin: true, credentials: true }));

// cors
app.use(cors({ origin: true, credentials: true }));
//import your models
require("./models/Book");

mongoose
  .connect(
    "mongodb+srv://CISE:BR4S7Fqjh2NUXe8k@cise.kh9m4ed.mongodb.net/ArticlesDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import routes
// require("./routes/quoteRoute.js")(app);
app.use('/api/books', books);

const PORT = process.env.PORT || 5000;

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./frontend/public")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/public", "index.html"));
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));