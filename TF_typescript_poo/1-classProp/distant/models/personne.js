"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(nom, prenom, dateNaiss) {
        this._nom = nom;
        this._prenom = prenom;
        this._dateNaiss = dateNaiss;
    }
    get nom() {
        return this._nom;
    }
    set nom(nom) {
        this._nom = nom;
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(prenom) {
        this._prenom = prenom;
    }
    get dateNaiss() {
        return this._dateNaiss;
    }
    set dateNaiss(dateNaiss) {
        this._dateNaiss = dateNaiss;
    }
}
exports.Personne = Personne;
