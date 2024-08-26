import { ICustomer } from "./interfaces/ICustomer";
import { Personne } from "./modelss/personne";
import { Courant } from "./modelss/courant";
import { Banque } from "./modelss/banque";
import { Compte } from "./modelss/compte";
import { Epargne } from "./modelss/epargne";
import { IBanker } from "./interfaces/IBanker";
import { SoldeInsuffisantError } from "./gestion_erreurs/SoldeInsuffisantError";

let personne1 : Personne
let courant1 : Courant
let epargne1 : Epargne
let banque1 : Banque

try {
    personne1 = new Personne("Dupont", "John", 1995)

    courant1 = new Courant('1234-1234-1234', 1000, personne1, 10_000)

    epargne1  = new Epargne('5678-5678-5678', 5000, personne1)

    courant1.Retrait(-500) // Devrait lever une erreur
}
catch (error : Error | any){
    console.error(`${error.message}`)
}

console.log("Mon programme continue de tourner")

console.log("====================================================================")

