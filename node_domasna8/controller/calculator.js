const { response } = require("express");
const fs = require("fs");

const parseTemplate = async(template, object = null) => {
  return new Promise ((success, fail) => {
      fs.readFile(`${__dirname}/../views/${template}`, "utf-8", (err, content) =>{
          if (err) return fail(err);
          if(object) {
              for (property in object) {
                  content = content.replaceAll(`{{${property}}}`, object[property]);
              }
          }
          return success(content);
      });
  });
};

//? 1. DA SE PRESMETA PLOSTINA NA PRAVOAGOLNIK

const plosPra = async (req, res) => {
  const width = req.params.width;
  const height = req.params.height;
  const plospra = height * width;
  const response = await parseTemplate("rezultat.html", {data: plospra, ime: "Plostina na pravoagolnik", podatoci: "Na ovoj nacina se presmetuva plostina na pravoagolnik, width * height"});

  res.send(response);
};

  //? 2. DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH

  let cel2Far = async (req, res) => {
    let rezultat = 0; 
    switch(req.params.op) {
      case "f2c" :
          rezultat =`${Number(req.params.num - 32) * 0.556}`;
          break;
      case "c2f" :
          rezultat = `${Number(req.params.num) * 1.8 + 32}`;
          break;
       default:
          return res.send("Error!");
  };

  const response = await parseTemplate("rezultat.html", {data: rezultat, ime: "Konvertiranje na f2c ili c2f", podatoci: "Na ovoj nacin presmetuvame kolku farenhajti se vo celziusovi"});
  res.send(response);
};

//? 3. DA SE KREKIRA KALKULATOR(SWITH || IF ELSE)

let calculator = async (req, res) => {
  let rezultat = "";
  switch(req.params.op) {
      case "sobiranje" :
          rezultat = `${Number(req.params.a) + Number(req.params.b)}`;
          break;
      case "odzemanje":
          rezultat = `${Number(req.params.a) - Number(req.params.b)}`;
          break;
      case "delenje":
          rezultat = `${Number(req.params.a) / Number(req.params.b)}`;
          break;
      case "mnozenje":
          rezultat = `${Number(req.params.a) * Number(req.params.b)}`;
          break;
      default:
          return res.send("Error!");
  }
  const response = await parseTemplate ("rezultat.html", {data: rezultat, ime: "Kalkulator", podatoci: "Kalkulator, na ovoj nacin se vrsat funkcii na sobiranje, odzemanje, mnozenje i delenje."});
  res.send(response);
};

//? 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA

const calForce = async (req, res) => {
  const mass = req.params.mass;
  const acc = req.params.acc;
  const calforce = mass * acc;
  const response = await parseTemplate("rezultat.html", {data: calforce, ime: "Funkcija sto presmetuva sila", podatoci: "Na ovoj nacina se presmetuva sila, mass * acc"});

  res.send(response);
};

//? 5. DA SE PRESMETA PLOSTINA NA TRIAGOLNIK

const plosTri = async (req, res) => {
  const base = req.params.base;
  const height = req.params.base;
  const plostri = base * height / 2
  const response = await parseTemplate("rezultat.html", {data: plostri, ime: "Plostina na triagolnik", podatoci: "Na ovoj nacina se presmetuva plostina na triagolnik, base * height / 2"});
  res.send(response);
};

  module.exports = {
    plosPra,
    cel2Far, 
    calculator,
    calForce,
    plosTri
  };
