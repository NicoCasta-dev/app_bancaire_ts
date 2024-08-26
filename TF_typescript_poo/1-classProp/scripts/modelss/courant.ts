import { InvalidOperationError } from "../gestion_erreurs/InvalidOperationError";
import { Compte } from "./compte"
import { Personne } from "./personne";

export class Courant extends Compte {
    private _ligneDeCredit : number
    private static TAUX_POSITIF = 0.03
    private static TAUX_NEGATIF = 0.0975

    constructor(numero : string, solde : number, titulaire : Personne, ligneDeCredit : number) {
        super(numero, solde, titulaire);
        this._ligneDeCredit = ligneDeCredit;
    }
 

    get ligneDeCredit() : number {
        if (this.ligneDeCredit > 0) {
            throw new InvalidOperationError();
        }
        return this._ligneDeCredit
    }

    protected set ligneDeCredit(ligneDeCredit : number) {
        this._ligneDeCredit = ligneDeCredit
    }

    Retrait(montant : number) : void {
        super.Retrait(montant);
    }
        

    Depot(montant : number) : void {
        super.Depot(montant);
    }

    protected CalculInteret() : number {
        if (this._solde >= 0) {
            return this._solde * Courant.TAUX_POSITIF;
        } else {
            return this._solde * Courant.TAUX_NEGATIF;
        }
    }
}
