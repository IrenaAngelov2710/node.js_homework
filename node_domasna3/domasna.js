//? Domasna: Da se dodade uste eden modul so ime domasna.js koj ke ima funkcija da promeni farenhajt vo celzius i obratno

const c2f = (celsius) => celsius * 1.8 + 32;
const f2c = (fahrenheit) => (fahrenheit - 32) * 0.556;


//? Da ima fukncija sto presmetuva plostina i perimetar na triagolnik
const plostinaTri = (osnova, visina) => {
    return (osnova * visina) / 2;
};

const perimetarTri = (a,b,c) => {
    return a+b+c;
};


//? Da ima funkcija sto presmetuva plostina i parametar na pravoagolnik
const plostinaPra = (sirina, visina) => {
    return sirina * visina;
};

const perimetarPra = (sirina, visina) => {
    return 2 * (sirina + visina);
};


//? Da ima funkcija sto proveruva dali nekoj broj e paren ili neparen

const nums = (num) => {
    return num % 2 === 0 ? `Brojot ${num} e paren` : `Brojot ${num} e neparen`;
};


//! Exports
module.exports = {
    c2f,
    f2c,
    plostinaTri,
    perimetarTri,
    plostinaPra,
    perimetarPra,
    nums
}