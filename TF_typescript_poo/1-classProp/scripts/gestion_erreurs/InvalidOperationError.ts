export class InvalidOperationError extends Error {
  constructor(message: string = "Votre ligne de crédit ne peut pas être négative",) {
    super(message);
    this.name = "InvalidOperationError";
  }
}