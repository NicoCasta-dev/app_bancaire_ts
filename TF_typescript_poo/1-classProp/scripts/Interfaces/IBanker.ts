import { ICustomer } from "./ICustomer";
import { Personne } from "../modelss/personne";

export interface IBanker extends ICustomer {
    readonly titulaire : Personne;
    readonly numero : string;
    AppliquerInteret(montant: number): void;
}