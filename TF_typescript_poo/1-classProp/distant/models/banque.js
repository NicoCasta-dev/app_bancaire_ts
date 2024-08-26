"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banque = void 0;
class Banque {
    constructor(nom) {
        this._comptes = new Map();
        this._nom = nom;
        this._comptes = new Map;
    }
    get nom() {
        return this._nom;
    }
    Ajouter(compte) {
        if (this._comptes.has(compte.numero))
            throw new Error("Le compte existe déjà");
        this._comptes.set(compte.numero, compte);
    }
    Supprimer(numero) {
        if (!this._comptes.has(numero))
            throw new Error("Le compte n'existe pas");
        this._comptes.delete(numero);
    }
    Compte(numero) {
        if (!this._comptes.has(numero))
            return undefined;
        return this._comptes.get(numero);
    }
    AvoirDesComptes(titulaire) {
        let avoir = 0;
        this._comptes.forEach((value, key) => {
            if (value.titulaire.nom === titulaire.nom && value.titulaire.prenom === titulaire.prenom)
                avoir += value.solde;
        });
        return avoir;
    }
}
exports.Banque = Banque;
