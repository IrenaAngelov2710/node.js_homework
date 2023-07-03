//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objektot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja

const express = require("express");
let ejs = require("ejs");

const app = express();
// mideleware so koj ovozmozuvame od front end da isprakanje vo forma podatoci na server
app.use(express.urlencoded({extended: true}));
// se koristi da se setira deka ke koristime ejs za prikazuvanje  na front end apps
app.set("view engine", "ejs");

let domasna = {
    ime: "Irena",
    prezime: "Angelov",
    ovoshje: ["Jabolko, Praska, Kajsija, Krusha"],
    zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
    vitamini: [
      { ime: "Jabolko", vitamin: "C", mineral: "kalcium" },
      { ime: "Krastavica", vitamin: "A", mineral: "Kalium" },
      { ime: "Praska", vitamin: "B", mineral: "Magnezium" },
      { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
      { ime: "Domat", vitamin: "G", mineral: "Srebro" },
    ],
  };

  app.get("/", (req, res) => {
    res.render("index", domasna)
  });
  app.post("/", (req, res)=>{
    console.log(req.body);
    const novElement ={
      ime: req.body.ime,
      vitamin: req.body.vitamin,
      mineral: req.body.mineral
    };
    domasna.vitamini.push(novElement);

    res.render("index", domasna);
  });

app.listen(9000, (err) => {
    if(err) return console.log(err);
    console.log("Server successfully started on port 9000")
});