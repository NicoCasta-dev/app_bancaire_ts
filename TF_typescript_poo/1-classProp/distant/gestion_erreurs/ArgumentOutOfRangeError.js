"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentOutOfRangeError = void 0;
class ArgumentOutOfRangeError extends Error {
    constructor(message = "Le montant doit être supérieur à 0") {
        super(message);
        this.name = "ArgumentOutOfRangeError";
    }
}
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
