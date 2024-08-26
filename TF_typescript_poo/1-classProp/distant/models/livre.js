"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
class Livre {
    constructor() {
        this._AnneePublication = 1995;
    }
    // Prop's
    // (set) => titre en ecriture
    set Titre(titre) {
        this._Titre = titre;
    }
    // (get) => titre en lecture
    get Titre() {
        return this._Titre;
    }
    // (get) Année de publication en lecture seule
    get AnneePublication() {
        return this._AnneePublication;
    }
    // Méthodes => Comportements logique a notre class (la rendre plus dynamique et fonctionnel pour la logique métier)
    afficherLivre() {
        console.log(`Descrition : \n - ${this._Titre} \n - ${this.Auteur} \n - ${this._AnneePublication}`);
    }
}
exports.Livre = Livre;
