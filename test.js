const express = require("express");
const path = require("path");
const app = express();
app.use("/public", express.static("public"));
const templates = path.join(__dirname + "/templates/");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const axios = require("axios")

app.get("/", function(req, res) {
  res.sendFile(templates + "home.html");
});

app.post("/convertemp", function(req, res) {
  console.log(req);
  res.send("It works");
});

app.post("/movie", async function(request, response) {
  console.log(request.body);
  var myPost = "";
  var result = await axios.get("http://www.omdbapi.com/?apikey=f25e9839&t=" + request.body.movie)
  myPost = result.data.Poster
  response.send(myPost);
});

app.listen(3000);
