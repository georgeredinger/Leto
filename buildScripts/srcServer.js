import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/videos", function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
{
    "videoId": "S7nOviZaMO0",
    "startSeconds": 180,
    "endSeconds": 190,
    "suggestedQuality": "hd720",
    "message": "first"
  },
  {
    "videoId": "wspUEkFo9oI",
    "startSeconds": 120,
    "endSeconds": 127,
    "suggestedQuality": "hd720",
    "message": "Wait, that\"s not Leto"

  },
  {
    "videoId": "PZpYZ3xYfQE",
    "startSeconds": 120,
    "endSeconds": 141,
    "suggestedQuality": "hd720",
    "message": "Leto Transitions"
  },
  {
    "videoId": "s9cgFPB-lD4",
    "startSeconds": 120,
    "endSeconds": 141,
    "suggestedQuality": "hd720",
    "message": "Leto at Spokane Sport Horse"

  },
  {
    "videoId": "SAm34wutr2w",
    "startSeconds": 120,
    "endSeconds": 141,
    "suggestedQuality": "hd720",
    "message": "Leto winning at SSH"

  },
  {
    "videoId": "v2dzXbJhz9k",
    "startSeconds": 120,
    "endSeconds": 141,
    "suggestedQuality": "hd720",
    "message": "Leto at home Winter"

  },
  {
    "videoId": "HSZONtn0m8U",
    "startSeconds": 120,
    "endSeconds": 141,
    "suggestedQuality": "hd720",
    "message": "Leto at home Summer"

  },
  {
    "videoId": "_SBfBp6oN-Y",
    "startSeconds": 120,
    "endSeconds": 141,
    "suggestedQuality": "hd720",
    "message": "Gail\"s goof"

  },
  {
    "videoId": "CCWxicZFaVU",
    "startSeconds": 120,
    "endSeconds": 141,
    "suggestedQuality": "hd720",
    "message": "Leto cool"

  }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
