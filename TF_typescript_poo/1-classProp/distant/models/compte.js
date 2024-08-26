"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
const ArgumentOutOfRangeError_1 = require("../gestion_erreurs/ArgumentOutOfRangeError");
class Compte {
    constructor(numero, solde, titulaire) {
        this._numero = numero;
        this._solde = solde;
        this._titulaire = titulaire;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get solde() {
        return this._solde;
    }
    set solde(solde) {
        this._solde = solde;
    }
    get titulaire() {
        return this._titulaire;
    }
    set titulaire(titulaire) {
        this._titulaire = titulaire;
    }
    Retrait(montant) {
        if (montant <= 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError("Le montant du retrait doit être positif");
        }
        this._solde -= montant;
    }
    Depot(montant) {
        if (montant <= 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError("Le montant du depôt doit être positif");
        }
        this._solde += montant;
    }
    AppliquerInteret(montant) {
        if (montant <= 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError("Le montant de l'intérêt doit être positif");
        }
        this._solde += this.CalculInteret(montant);
    }
}
exports.Compte = Compte;
