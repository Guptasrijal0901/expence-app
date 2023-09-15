const express = require("express")
const cors = require("cors")
const colors = require("colors")
const dotenv = require("dotenv")
const morgan = require("morgan")
const {connectDatabase} = require("./connect/connect")
const collection = require("./models/usermodel")
// rest object
const app = express()
//middleware
app.use(cors());
app.use(express.json())
app.use(morgan())
// routes
app.get("/", (req, res)=>{
    res.json("Hello from server")
})
//port
const PORT = 8080 || process.env.PORT
connectDatabase();
app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname + "/client/build/index.html"),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
);
 });
//listen
app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
})