"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidOperationError = void 0;
class InvalidOperationError extends Error {
    constructor(message = "Votre ligne de crédit ne peut pas être négative") {
        super(message);
        this.name = "InvalidOperationError";
    }
}
exports.InvalidOperationError = InvalidOperationError;
