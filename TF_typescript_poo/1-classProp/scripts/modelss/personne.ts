export class Personne {
    private _nom! : string
    private _prenom! : string
    private _dateNaiss! : number

    constructor(nom : string, prenom : string, dateNaiss : number) {
        this._nom = nom
        this._prenom = prenom
        this._dateNaiss = dateNaiss
    }


    get nom() : string {
        return this._nom
    }

    private set nom(nom : string) {
        this._nom = nom
    }

    get prenom() : string {
        return this._prenom
    }

    private set prenom(prenom : string) {
        this._prenom = prenom
    }

    get dateNaiss() : number {
        return this._dateNaiss
    }

    private set dateNaiss(dateNaiss : number) {
        this._dateNaiss = dateNaiss
    }
}

