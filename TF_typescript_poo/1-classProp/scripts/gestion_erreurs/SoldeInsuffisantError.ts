export class SoldeInsuffisantError extends Error {
  constructor(message: string = "Votre solde est insufisant pour réaliser cette opération") {
    super(message);
    this.name = "SoldeInsuffisantError";
  }
}