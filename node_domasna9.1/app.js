//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objektot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja

const express = require("express");
let ejs = require("ejs");

const { zelenchukDomasna, dodavanje} = require("./controller/funkcija");

const app = express();
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/zelenchuk", zelenchukDomasna);
app.post("/zelenchuk", dodavanje);

app.listen(9000, (err) => {
    if(err) return console.log(err);
    console.log("Server successfully started on port 9000")
});