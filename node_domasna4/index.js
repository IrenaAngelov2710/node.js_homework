//! DA PROCHITATE OD DOKUMENTACIJA
//? Da istrazite uste nekolku methodi na fs modulot
//? Kako da izbrishite fajl, kako da preimenuvate fajls
//? i uste eden po zelba
//? isto taka da kreirate fajl
//? i da prochitate fajl

const fs = require("fs")

// Vcituvanje na fajl (asyhrona verzija)

fs.readFile("./citanjeFajl.txt", "utf-8", (err, text) => {
  if (err) {
    return console.log("Error!");
  }
  console.log(text);
});

//! Kreiranje na nov fajl

const asyhronFajl = "Asyhrono kreiranje na fajl";
fs.writeFile("./prvAsyhronFajl.txt", asyhronFajl, "utf-8", (err) => {
  if(err) {
    return console.log("Error!");
  }
  console.log("Uspesno zapisuvanje na prvAsyhronFajl.txt");
});

//   //! Kreiranje na uste eden fajl i brisenje na istiot
// Kreiranje
  const brisenjeFajl = "Asyhrono kreiranje na fajl, koj potoa ke bide izbrisan";
  fs.writeFile("./mojotVtorFajl.txt", brisenjeFajl, "utf-8", (err) => {
    if(err) {
      return console.log("Error!");
    }
    console.log("Uspesno zapisuvanje na mojotVtorFajl.txt");
  });
  
// Brisenje
fs.unlink("./mojotVtorFajl.txt", (err) => {
  if (err) {
    return console.log("Go nemate izbrisano fajlot");
  }
  console.log("Fajlot so ime mojotVtorFajle.txt e uspesno izbrisan")
});

  //! Kreiranje na uste eden fajl i preimenuvanje na istiot

  const preimenuvanjeFajl = "Asyhrono kreiranje na fajl, koj potoa ke preimenuvan";
  fs.writeFile("./mojotTretFajl.txt", preimenuvanjeFajl, "utf-8", (err) => {
    if (err) {
        return console.log("Error!");
    }
    console.log("Uspesno kreiranje na mojotTretFajl.txt");
  });

  fs.rename("./mojotTretFajl.txt", "./novoIme.txt", (err) => {
    if(err) {
      return console.log("Napravivte greska i ne smenivte ime")
    }
    console.log("Uspesno go smenivte imeto od mojotTretFajl.txt vo novoIme.txt")
  });

  
