"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsException = void 0;
class PetsException extends Error {
    constructor(message = ``) {
        super();
        this.message = message;
    }
    what() {
        return this.message;
    }
}
exports.PetsException = PetsException;
//# sourceMappingURL=pet.exception.js.map