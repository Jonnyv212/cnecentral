const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const { Client } = require("pg");

const connection = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

connection.connect(err => {
  if (err) {
    return err;
  }
});

app.get("/db", (req, res) => {
  connection.query("SELECT * FROM cnecentral.images", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      // console.log(results.rows);
      res.send(results.rows);
    }
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
