export declare class PetsException extends Error {
    readonly message: string;
    constructor(message?: string);
    what(): string;
}
