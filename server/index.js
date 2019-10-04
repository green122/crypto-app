const express = require("express");
const path = require("path");
const cors = require("cors");
const rp = require("request-promise");

const app = express();
const port = 5000;

// session support is required to use ExpressOIDC

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(cors());

app.get("/api", (req, res) => {
  
  const requestOptions = {
    method: "GET",
    uri:
      "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    qs: {
      start: "1",
      limit: "20",
      convert: "USD"
    },
    headers: {
      "X-CMC_PRO_API_KEY": "90665b75-b641-432d-80d4-53fea0bb2f30"
    },
    json: true,
    gzip: true
  };

  rp(requestOptions)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log("API call error:", err.message);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => console.log(`listening on port ${port}!`));
