"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoldeInsuffisantError = void 0;
class SoldeInsuffisantError extends Error {
    constructor(message = "Votre solde est insufisant pour réaliser cette opération") {
        super(message);
        this.name = "SoldeInsuffisantError";
    }
}
exports.SoldeInsuffisantError = SoldeInsuffisantError;
