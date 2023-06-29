//? Domasna: Da se dodade uste eden modul so ime domasna.js koj ke ima funkcija da promeni farenhajt vo celzius i obratno

const c2farenheit = require ("./domasna.js");
console.log(c2farenheit.c2f(25));

const f2celsius= require ("./domasna.js");
console.log(f2celsius.f2c(95));


//? Da ima fukncija sto presmetuva plostina i perimetar na trigolnik

const plosTri = require ("./domasna.js");
console.log(plosTri.plostinaTri(3,5));


const perTri = require ("./domasna.js");
console.log(perTri.perimetarTri(3,5,8));


//? Da ima fukncija sto presmetuva plostina i parametar na pravoagolnik

const plosPra = require ("./domasna.js");
console.log(plosPra.plostinaPra(30,20));

const perPra = require ("./domasna.js");
console.log(perPra.perimetarPra(40,15))


//? Da ima funkcija sto proveruva dali nekoj broj e paren ili neparen

const numS = require ("./domasna.js");
console.log(numS.nums(2));