export interface ICustomer {
    readonly solde: number;
    Depot(montant: number): void;
    Retrait(montant: number): void;
}