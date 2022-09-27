const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')

const app = express()
dotenv.config({ path: ".env" })
const port = process.env.PORT || 8080

// log request
app.use(morgan("tiny"))

// mongodb connection
connectDB()

// parse reqst to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))
app.use("/images", express.static(path.resolve(__dirname, "assets/images")))

// load routers 
app.use("/", require("./server/routes/router"))

app.listen(port, () => {
    console.log(`crud app running on http://localhost:${port}`)
})
