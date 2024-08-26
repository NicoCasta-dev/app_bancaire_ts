"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personne_1 = require("./models/personne");
const courant_1 = require("./models/courant");
const epargne_1 = require("./models/epargne");
let personne1;
let courant1;
let epargne1;
let banque1;
try {
    personne1 = new personne_1.Personne("Dupont", "John", 1995);
    courant1 = new courant_1.Courant('1234-1234-1234', 1000, personne1, 10000);
    epargne1 = new epargne_1.Epargne('5678-5678-5678', 5000, personne1);
    courant1.Retrait(-500); // Devrait lever une erreur
}
catch (error) {
    console.error(`${error.message}`);
}
console.log("Mon programme continue de tourner");
