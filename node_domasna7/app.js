//* npm init -y
//* vo package.json, pisuvame "start": "nodemon app.js", posle "test"
//* npm install epxress
//* npm run start

//? Da se rekreira domasnoto od chas 6

//! Go povikuvame express modulot

const express = require("express");

//! Kreirame nova express aplikacija

const app = express(); 

app.get("/hello", (req, res) => {
  res.send("Welcome");
});

app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    const samoglaski = ["a", "e", "i", "o", "u"];
    const brojNaBukvi = name.length;
    const eParen = brojNaBukvi % 2 === 0 ? "da" : "ne";

    let samoglaskiBroj = 0;
    const bukviArray = name.split("");

    for (let i = 0; i < bukviArray.length; i++) {
      const bukva = bukviArray[i];
      if (samoglaski.includes(bukva)) {
        samoglaskiBroj++;
      };
    };

    const soglaskiBroj = name.length - samoglaskiBroj;

    res.send(
        `Imeto ${name}, ima ${brojNaBukvi} karakteri, paren: ${eParen}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`
      );
});

//! Ja startuvame aplikacijata na porta 10000
app.listen (10000, (err) => {
    if (err) return console.log(err);
    console.log("Server started successfully on port 10000");
});