"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetShopService = void 0;
const common_1 = require("@nestjs/common");
const pet_exception_1 = require("../pet-shop/exception/note.exception/pet.exception");
const uuidv4_1 = require("uuidv4");
let PetShopService = class PetShopService {
    constructor() {
        this.pets = [];
    }
    create(createPetDto) {
        createPetDto.id = (0, uuidv4_1.uuid)();
        this.pets.push(createPetDto);
        return createPetDto;
    }
    findAll() {
        if (this.pets.length == 0) {
            throw new pet_exception_1.PetsException('There are no pets');
        }
        return this.pets;
    }
    findOne(id) {
        for (const item of this.pets) {
            if (item.id == id)
                return item;
            throw new pet_exception_1.PetsException('Such id does not exist');
        }
    }
    update(id, updatePetShopDto) {
        const pid = this.pets.findIndex((p) => p.id == id);
        this.pets[pid] = Object.assign(Object.assign({}, this.pets[pid]), updatePetShopDto);
    }
    remove(id) {
        const result = this.pets.filter((c) => c.id !== id);
        if (result.length === this.pets.length) {
            throw new pet_exception_1.PetsException('Such id does now exist');
        }
        this.pets = result;
    }
};
PetShopService = __decorate([
    (0, common_1.Injectable)()
], PetShopService);
exports.PetShopService = PetShopService;
//# sourceMappingURL=pet-shop.service.js.map