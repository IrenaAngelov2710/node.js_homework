const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.1, grad: "Prilep" },
  { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
  { ime: "Vancho", prosek: 8.8, grad: "Kratovo" },
  { ime: "Ivana", prosek: 6.3, grad: "Kumanovo" },
  { ime: "Simona", prosek: 7, grad: "Ohrid" },
  { ime: "Natasha", prosek: 8.2, grad: "Skopje" },
  { ime: "Stanko", prosek: 6.7, grad: "Kichevo" },
  { ime: "Damjan", prosek: 9.1, grad: "Kumanovo" },
  { ime: "Sandra", prosek: 9.2, grad: "Ohrid" },
];

//? Domasna
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)
const studenti1 = studenti
.filter((student) => student.grad == "Skopje" && student.ime.endsWith("a") && student.prosek > 7)
.sort ((a,b) => a.prosek - b.prosek);
console.log(studenti1);

//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
const studenti2 = studenti
.filter((student) => student.prosek > 9 && student.grad != "Skopje")
.sort ((a,b) => b.prosek - a.prosek);
console.log(studenti2);

//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
const studenti3 = studenti
.filter((student) => student.ime.length == 5)
.slice(0,3).sort ((a,b) => a.prosek - b.prosek);
console.log(studenti3)

//? 4. Vkupen prosek na studenti koi se od Kumanovo
const studenti4 = studenti
.filter((student) => student.grad == "Kumanovo")
.reduce ((acc,student) => {
    return acc + student.prosek;
  },0)
console.log(`Vkupniot prosek na studenti od Kumanovo e ${studenti4}`);

//? 5. Prosek na prosecite od gradoovite Skopje i Ohrid
const studenti5 = studenti
.filter((student) => student.grad == "Skopje" || student.grad == "Ohrid")
console.log(studenti5)

const prosek = studenti 
  .reduce ((acc, student) => {
    return acc + student.prosek / studenti5.length;
  }, 0)
console.log(`Prosekot na prosecite od gradovite Skopje i Ohrid e ${prosek}`)

//? 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo
studenti.push({
    ime: "Goran",
    prosek: 7.3,
    grad: "Delchevo"
  });
  console.log(studenti);

//? 7.Da se izbrishe prviot student vo studentite
const firstStudent = studenti.shift();

//? 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo prosecite im se za 1 pogolemi od segasnite(dinamicki)
const updatedStudenti = studenti
.filter((student) => student.grad == 'Ohrid' || student.grad == 'Kumanovo')
.map(student => ({
  ...student,
  prosek: student.prosek + 1
}));
console.log(updatedStudenti);