import { Compte } from "./compte";
import { Personne } from "./personne";
import { SoldeInsuffisantError } from "../gestion_erreurs/SoldeInsuffisantError";

export class Epargne extends Compte {
    private _dateDernierRetrait: Date;
    private static TAUX = 0.045;
    
    constructor(numero: string, solde: number, titulaire: Personne) {
        super(numero, solde, titulaire);
        this._dateDernierRetrait = new Date();
    }

    get _ateDernierRetrait(): Date {
        return this._dateDernierRetrait;
    }

    Retrait(montant: number): void {
        if (this.solde - montant < 0) {
        super.Retrait(montant);
        this._dateDernierRetrait = new Date();
        }
        else {
            throw new SoldeInsuffisantError();
        }
    }

    CalculInteret(): number {
        return this._solde * Epargne.TAUX;
    }
}
