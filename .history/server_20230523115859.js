const { readdirSync } = require("fs");
const path = require("path");
const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require('cors');


// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())



// routes middleware
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`))) 

app.get("/", (req, res) => {
  res.send("Hello home page");
});

// server
// const port = process.env.PORT || 8000;

// Connect to DB and start server
// mongoose
//     .connect(process.env.DATABASE)
//     .then(() => {
//         app.listen(port, () => {
//             console.log(`Server Running on port ${port}`);
//         });
//     })
//     .catch((err) => console.log(err));

app.listen(8000, () => {
    console.log(`Server run at port 8000`);
    })

