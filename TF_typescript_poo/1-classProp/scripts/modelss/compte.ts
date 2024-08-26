import { Personne } from "./personne";
import { IBanker } from "../interfaces/IBanker";
import { ICustomer } from "../interfaces/ICustomer";
import { ArgumentOutOfRangeError } from "../gestion_erreurs/ArgumentOutOfRangeError";

export abstract class Compte implements IBanker, ICustomer {
    private _numero: string;
    protected _solde: number;
    private _titulaire: Personne;

    constructor(numero : string, solde : number, titulaire : Personne) {
        this._numero = numero;
        this._solde = solde;
        this._titulaire = titulaire;
    }

    get numero(): string {
        return this._numero;
    }

    protected set numero(numero: string) {
        this._numero = numero;
    }

    get solde(): number {
        return this._solde;
    }

    protected set solde(solde: number) {
        this._solde = solde;
    }

    get titulaire(): Personne {
        return this._titulaire;
    }

    protected set titulaire(titulaire: Personne) {
        this._titulaire = titulaire;
    }

    Retrait(montant: number): void {
        if (montant <= 0) {
            throw new ArgumentOutOfRangeError("Le montant du retrait doit être positif");
        }
        this._solde -= montant;
    }
        

    Depot(montant: number): void {
        if (montant <= 0) {
            throw new ArgumentOutOfRangeError("Le montant du depôt doit être positif");
        }
        this._solde += montant;
    }

    protected abstract CalculInteret(montant: number) : number 

    AppliquerInteret(montant: number): void {
        if (montant <= 0) {
            throw new ArgumentOutOfRangeError("Le montant de l'intérêt doit être positif");
        }
        this._solde += this.CalculInteret(montant);
    }
}