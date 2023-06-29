//? Servis koj kje obrabotuva ruti od sledniot tip
// ime/aleksandar
// /ime/angela
// /ime/julija
// parni: da, karakteri 5, soglaski: 2, samoglaski

//! Povikuvanje na http modulot
const http = require ("http");

//! Kreiranje na server
const server = http.createServer((req, res) => {
  const [_, path, name] = req.url.split("/");

  if (path === "ime") {
    console.log(path, name);
    if (!name) {
      res.end("invalid url");
      return;
    }

    const samoglaski = ["a", "e", "i", "o", "u"];
    const brojNaBukvi = name.length;
    const eParen = brojNaBukvi % 2 === 0 ? "da" : "ne";
    let samoglaskiBroj = 0;

    const bukviArray = name.split("");

    for (let i = 0; i < bukviArray.length; i++) {
      if (samoglaski.includes(bukviArray[i])) {
        samoglaskiBroj++;
      }
    }

    const soglaskiBroj = brojNaBukvi - samoglaskiBroj;

    res.end(
      `Imeto ima ${brojNaBukvi} karakteri, paren: ${eParen}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`
    );
  } else if (path === "sobiranje") {
    res.end();
  } else if (path === "odzemnaje ") {
  }
});

//! Kreiranje listener na odredena porta
server.listen(10000,"127.0.0.1", (err) => {
    if(err) console.log(err);
    console.log("Server has started on port 10000");
});