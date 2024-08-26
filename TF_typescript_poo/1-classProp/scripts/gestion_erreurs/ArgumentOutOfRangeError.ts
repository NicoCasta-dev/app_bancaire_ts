export class ArgumentOutOfRangeError extends Error {
  constructor(message: string = "Le montant doit être supérieur à 0") {
    super(message);
    this.name = "ArgumentOutOfRangeError";
  }
}