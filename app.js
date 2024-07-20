const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

//middleware
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());
// enable cors
app.use(cors());
app.options("*", cors());

app.use("/api/blogs", blogRouter);

//configure mongoose
mongoose
    .connect(process.env.MONGO_URL)
    .then((result) => {
        console.log(`WORKING PORT IS http://localhost:${3000 || process.env.PORT}`);
        app.listen(3000 || process.env.PORT);
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = app;
