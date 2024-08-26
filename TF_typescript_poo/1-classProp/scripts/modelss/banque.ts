import { Compte } from "./compte";
import { Personne } from "./personne";

export class Banque {
    private _nom: string;
    private _comptes : Map<string, Compte> = new Map();

    constructor(nom : string) {
        this._nom = nom;
        this._comptes = new Map<string, Compte>;
    }

    get nom(): string {
        return this._nom;
    }

    Ajouter(compte : Compte): void { 
        if (this._comptes.has(compte.numero))
            throw new Error("Le compte existe déjà");
        this._comptes.set(compte.numero, compte);
    }

    Supprimer(numero : string): void {
        if (!this._comptes.has(numero))
            throw new Error("Le compte n'existe pas");
        this._comptes.delete(numero);
    }

    Compte(numero : string): Compte | undefined {
        if (!this._comptes.has(numero))
            return undefined;
        return this._comptes.get(numero);
    }

    AvoirDesComptes(titulaire : Personne): number {
        let avoir : number = 0;
        this._comptes.forEach((value, key) => {
            if (value.titulaire.nom === titulaire.nom && value.titulaire.prenom === titulaire.prenom)
                avoir += value.solde;
        });
        return avoir;
    }
}