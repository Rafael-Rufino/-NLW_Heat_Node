import "dotenv/config";
import express = require("express");

const app = express();

app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.listen(3333, () => console.log("🚀 Server is runniing on port 3333"));
