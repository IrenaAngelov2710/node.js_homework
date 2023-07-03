//? DA SE KREIRA VO CALCULATOR USTE 6 funkcii
//? DA SE KREIRA NOV HTML FILE STO KJE SE VIKA REZULTAT
//? 1. DA SE PRESMETA PLOSTINA NA PRAVOAGOLNIK
//? 2. DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH
//? 3. DA SE KREKIRA KALKULATOR(SWITH || IF ELSE)
//? 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA
//? 5. DA SE PRESMETA PLOSTINA NA TRIAGOLNIK
//? SITE OVIE FUNKCII DA VRAKJAAT WEB STRANIICA
//? STRANICATA DA IMA NEKAKOV STYLING(boi, background, flex, border)
//? VO WEB STRANICATA DA IMA  NASLOV ZA STO SLUZI REZULTATOT
//? I DA IMA PARAGRAPH SO KOJ KJE SE OBNASUNVA ZADADENATA FUNKCIJA

//* MVC - arhitektura

//! Go povikuvame express modulot
const express = require("express");

//! Kreirame nova express aplikacija
const app = express();

const calculator = require("./controller/calculator");

app.get("/plospra/:width/:height", calculator.plosPra);
app.get("/konverter/:op/:num", calculator.cel2Far);
app.get("/calculator/:op/:a/:b", calculator.calculator)
app.get("/calforce/:mass/:acc", calculator.calForce);
app.get("/plostri/:base/:height", calculator.plosTri);



//! Ja startuvame aplikacijata na porta 10000
app.listen(10000, (err) => {
    if (err) return console.log(err);
    console.log("Server started successfully");
});