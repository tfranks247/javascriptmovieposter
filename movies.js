const axios = require("axios");

axios.get("http://www.omdbapi.com/?apikey=f25e9839&t=speed").then(function(x) {
  console.log(x.data);
});
