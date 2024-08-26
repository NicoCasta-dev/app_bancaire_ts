"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epargne = void 0;
const compte_1 = require("./compte");
const SoldeInsuffisantError_1 = require("../gestion_erreurs/SoldeInsuffisantError");
class Epargne extends compte_1.Compte {
    constructor(numero, solde, titulaire) {
        super(numero, solde, titulaire);
        this._dateDernierRetrait = new Date();
    }
    get _ateDernierRetrait() {
        return this._dateDernierRetrait;
    }
    Retrait(montant) {
        if (this.solde - montant < 0) {
            super.Retrait(montant);
            this._dateDernierRetrait = new Date();
        }
        else {
            throw new SoldeInsuffisantError_1.SoldeInsuffisantError();
        }
    }
    CalculInteret() {
        return this._solde * Epargne.TAUX;
    }
}
exports.Epargne = Epargne;
Epargne.TAUX = 0.045;
