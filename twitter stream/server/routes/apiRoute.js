const router = require("express").Router();

const axios = require("axios");

router.get("/", (req, res, next) => {
  const token =
    "AAAAAAAAAAAAAAAAAAAAAE8mhgEAAAAAQx17JW9G5pV477ck%2B2S7temyLhY%3DlhxzRjBIfu0xaYdf2aHixh7h9kWPGzan3PqrnFuFy59pdf9uoE";
  axios
    .get(
      `https://api.twitter.com/2/tweets/search/recent?query=modi&tweet.fields=id,created_at,author_id,text,entities&user.fields=id,name,username,description,profile_image_url,url`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      console.log("response:", response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log("err:", err);
      res.send(err);
    });
});

module.exports = router;
