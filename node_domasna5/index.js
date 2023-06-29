//? Student ime prezime prosek grad
//? Dodavanja student vo fajlot
//? Brishenje na student od fajlot
//? Menuvanje na podatoci na student od fajlot
//? Chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vcitate celata sodrzina of fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/ JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizata od js niza / objekt treba da e konvertirana vo tekst | JSTON.stringify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile

//? - Imeto na studentot treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertira sodrzinata od obichniot tekst vo js niza ili objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. tekstot treba da bide zachuvan vo fajlot | fs.writeFile

//? - Treba da se izbrishe studen od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot
//? 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite soodvetniot clen | Array,filter
//? 4. Nizata od js treba da bidde konvertirana vo tekst
//? 5. Tekstot treba da bide zachuvan vo fajlot

const modul = require("./studentList");

//? Dodavanja student vo fajlot
const addStudent = async () => {
    try{
        //Vcituvanje na celata niza
        const dataString = await modul.fileRead ("studenti.json");
        let studentsData = JSON.parse(dataString);

        //Dodavanje nov objekt vo nizata
        const newStudent = {ime: "Jasmina", grad: "Kicevo", prosek: 9.7};
        studentsData.push(newStudent);

        //Zacuvuvanje na objektot vo nizata
        await modul.fileWrite ("studenti.json", JSON.stringify(studentsData));

        console.log("New student was added successfully!");
    }
    catch(err){
        console.log("Error adding student: ", err);
    }
};
addStudent();

//? Menuvanje na podatoci na student od fajlot
const changeName = async () => {
    try {
        //Vcituvanje na cela niza
        const dataString = await modul.fileRead("studenti.json");
        let studentsData = JSON.parse(dataString);

        //Pravenje promena na soodvetniot clen
        const updatedArr = studentsData.map (student => {
            if (student.ime === "Stefan") {
                return {...student, ime: "Aleksandar"};
            } return student;
        });

        //Zacuvuvanje na objektot vo nizata
        await modul.fileWrite ("studenti.json", JSON.stringify(studentsData));

        console.log("Array was updated successfully.")
    }
    catch(err) {
        console.log(err);
    }
} 
changeName();


//? Chitanje na site studenti od fajlot
const allStudent = async () => {
    try{
        //Vcituvanje na celata niza
        const result = await modul.fileRead("studenti.json");
        let jsonData = JSON.parse(result);
        console.log(jsonData);
    }
    catch(err){
        console.log(err);
    }
};
allStudent();