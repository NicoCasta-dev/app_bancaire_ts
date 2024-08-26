"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
const InvalidOperationError_1 = require("../gestion_erreurs/InvalidOperationError");
const compte_1 = require("./compte");
class Courant extends compte_1.Compte {
    constructor(numero, solde, titulaire, ligneDeCredit) {
        super(numero, solde, titulaire);
        this._ligneDeCredit = ligneDeCredit;
    }
    get ligneDeCredit() {
        if (this.ligneDeCredit > 0) {
            throw new InvalidOperationError_1.InvalidOperationError();
        }
        return this._ligneDeCredit;
    }
    set ligneDeCredit(ligneDeCredit) {
        this._ligneDeCredit = ligneDeCredit;
    }
    Retrait(montant) {
        super.Retrait(montant);
    }
    Depot(montant) {
        super.Depot(montant);
    }
    CalculInteret() {
        if (this._solde >= 0) {
            return this._solde * Courant.TAUX_POSITIF;
        }
        else {
            return this._solde * Courant.TAUX_NEGATIF;
        }
    }
}
exports.Courant = Courant;
Courant.TAUX_POSITIF = 0.03;
Courant.TAUX_NEGATIF = 0.0975;
